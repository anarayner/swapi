import {AuthService} from "./auth.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TestBed} from "@angular/core/testing";
import {JwtHelperService, JwtModule} from "@auth0/angular-jwt";
import {environment} from "../../environment";
import {AuthorizationModule} from "./authorization.module";
import {firstValueFrom, take} from "rxjs";

describe('AuthService', () => {
  let service : AuthService
  let httpMock: HttpTestingController

  beforeEach(async () => {
     TestBed.configureTestingModule({
       imports: [
         HttpClientTestingModule,
         AuthorizationModule
       ],
       providers: [AuthService, JwtHelperService]
     });
    service = TestBed.inject(AuthService)
    httpMock = TestBed.inject(HttpTestingController)
  })

  afterEach(() => {
    httpMock.verify()
    localStorage.removeItem('token')
    localStorage.removeItem('id')
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should log in', (done) => {
    const username = 'test-user'
    const password = 'password'
    const response = {token: 'token', id: 1}

    service.logIn(username, password).subscribe((data) => {
      expect(data.token).toBe('token')
      expect(localStorage.getItem('token')).toBe(JSON.stringify('token'))
      expect(localStorage.getItem('id')).toBe(JSON.stringify(1))
      done()
    })

    const req = httpMock.expectOne(`${environment.apiUrl}/login`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ username, password });
    req.flush(response);
  })

  it('should not be logged in if token expired', async () => {
    localStorage.setItem('token', JSON.stringify('token'))
    const jwtHelper = TestBed.inject(JwtHelperService)
    jest.spyOn(jwtHelper, 'isTokenExpired').mockResolvedValue(true)

    const isLoggedIn = await firstValueFrom(service.isLoggedIn$)
    expect(isLoggedIn).toBe(false)
  })
})

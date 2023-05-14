import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavBarComponent } from './nav-bar.component';
import { AuthService } from '../../../auth/auth.service';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BehaviorSubject} from "rxjs";
import {By} from "@angular/platform-browser";
import {AuthorizationModule} from "../../../auth/authorization.module";

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let authService: AuthService;
  let isLoggedIn$: BehaviorSubject<boolean>;

  beforeEach(async () => {
    await TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    isLoggedIn$ = new BehaviorSubject<boolean>(false)
    authService = {
      isLoggedIn$: isLoggedIn$.asObservable(),
    } as unknown as AuthService;
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AuthorizationModule
      ],
      declarations: [NavBarComponent],
      providers: [
        { provide: AuthService, useValue: authService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show the "Films" button', () => {
    const button = fixture.nativeElement.querySelector('a[routerlink="/films"]');
    expect(button).toBeTruthy();
  });

  it('should show the "People" button', () => {
    const button = fixture.nativeElement.querySelector('a[routerlink="/people"]');
    expect(button).toBeTruthy();
  });

  it('should show the "Log in" button when the user is not logged in', () => {
    const button = fixture.nativeElement.querySelector('a[routerlink="/login"]');
    expect(button).toBeTruthy();
  });

  it('should not show the "Log out" button when the user is not logged in', () => {
    const button = fixture.nativeElement.querySelector('button[routerlink="/films"]');
    expect(button).toBeFalsy();
  });

  it('should not show the user icon when the user is not logged in', () => {
    const button = fixture.nativeElement.querySelector('button[routerlink="/user/"]');
    expect(button).toBeFalsy();
  });

  it ('should show the "Log out" button when the user is logged in', async () => {
    isLoggedIn$.next(true)
    fixture.detectChanges()
    await fixture.whenStable()
    const logoutBtn = fixture.debugElement.query(By.css('.submit-button'))
    expect(logoutBtn).toBeTruthy()
  })
});

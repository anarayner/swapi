import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-info',
  template: `
    <div class="info">
      <p><i>{{title}}</i></p>
      <h3>{{info}}</h3>
    </div>
  `,
  styles: [`
    .info {
      background: #131313;
      width: 200px;
      padding: 15px;
      border-radius: 10px;
    }
    h3 {
      margin: 0;
    }
  `]
})
export class InfoComponent {
  @Input() info!:  string | undefined
  @Input() title!: string
}

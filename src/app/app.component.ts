import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--<print-name></print-name>-->
    <!--<app-directivecomp></app-directivecomp>-->
    <!--<app-employee></app-employee>-->
    <!--<app-greetings></app-greetings>-->
    <app-login></app-login>
    
  `,
  styles: ['p[font-weight]']
})
export class AppComponent {
  title = 'MyFirstAngularApp';
}



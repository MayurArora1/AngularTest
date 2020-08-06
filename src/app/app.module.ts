import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from "./firstcomp";
import { LuckynumberComponent } from './luckynumber/luckynumber.component';
import { CounterComponent } from './counter/counter.component';
import { HelloName } from "./helloname";
import { FormsModule } from "@angular/forms";
import { PrintNameComponent } from './printname.component';
import { DirectivecompComponent } from './directivecomp/directivecomp.component';
import { EmployeeComponent } from './employeedata/employeedata.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { Login } from './login';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LuckynumberComponent,
    CounterComponent,
    HelloName,
    PrintNameComponent,
    DirectivecompComponent,
    EmployeeComponent,
    GreetingsComponent,
    Login
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap: [FirstComponent]
})
export class AppModule { }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetings',
  template: `
    <form>
    Enter your name:<input [(ngModel)]=Name name='nm' />
    <button type='submit' (click)='show()'>Submit</button>
    </form>
    <p>
    <span> {{value}} </span>
    <span> {{Name}} </span>
    </p> 
  `,
  styles: [
  ]
})
export class GreetingsComponent implements OnInit {
  
  constructor() { }
  Name:string="";
  value:string="";
  greetings = ["Hello", "Hi", "Namaste", "Salaam", "Bonjour"];

  show(){
    this.value=this.greetings[Math.floor(Math.random() * this.greetings.length)];
  }
  

  ngOnInit(): void {
  }

}

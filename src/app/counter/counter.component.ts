import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-counter',
  template: `
  counter 
  <button (click)='show()'>click</button>
  <p>Counter is:<span>{{counter}}</span></p>`,
  styles: ['p{font-weight:bold;font-size:40;font-family:arial}'
]
})
export class CounterComponent implements OnInit {
  counter :number=101;
  show(){
    this.counter++;
  }
  constructor() { }
  ngOnInit(): void {
  }
}

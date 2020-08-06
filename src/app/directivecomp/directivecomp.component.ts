import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivecomp',
  templateUrl: './directivecomp.component.html',
  styleUrls: ['./directivecomp.component.css']
})
export class DirectivecompComponent implements OnInit {

  isValid:boolean=false;

  assign(c){
    this.isValid=c;
  }

  constructor() { }

  ngOnInit(): void {
  }
  cities:any[]=["Mumbai","Gujrat","Pune","Delhi"];

}

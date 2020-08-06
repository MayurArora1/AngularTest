import { Component, OnInit } from "@angular/core";
import { User } from "./user";
@Component({
    selector:'print-name',
    template:`
        <form (ngSubmit)='show()'>
            UserName: <input [(ngModel)]=user.username name='uname'/>
            User Address: <input [(ngModel)]=user.useraddress name='uadd'/>
            User Age: <input [(ngModel)]=user.userage name='uage'/>
            <button type='submit'>submit</button>
            <!--<img src='{{imagePath}}'/>-->
            <img [src]='imagePath'/>
            <span [innerHTML]='title'></span>    
        </form>
    `,
    styles:[]
})
export class PrintNameComponent implements OnInit{
    imagePath='assets/img.png';
    title='Hello How are you';


    user=new User();

    constructor(){
        console.log('constructor called'); 
    }

    ngOnInit(): void{
        console.log('on hit called');
        console.log(this.user.username+' '+this.user.useraddress+' '+this.user.userage);
    }

    show(){
        console.log(this.user.username+' '+this.user.useraddress+' '+this.user.userage);
    }
}
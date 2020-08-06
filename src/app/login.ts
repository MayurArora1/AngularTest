import { Component } from "@angular/core";
@Component({
    selector:'app-login',
    template:`
        <form>
            User Name: <input [(ngModel)]=userName type='text' name='nm'/><br><br>
            User Password: <input [(ngModel)]=userPass type='password' name='ps'/><br>
            <button type='submit' (click)='checkLogin()'>Submit</button>
        </form>
        
        <div *ngIf='valid'>
            <p>Login Successful</p>
        </div>
        
        <div *ngIf='!valid'>
            <p>Login Not Successful</p>
        </div>
    
    `,
    styles:[]
})
export class Login{
    userName:string;
    userPass:string;
    valid=false;
    firstWord:number;
    info:string[]=["john","joe","mac","jack"];
    pass:string[]=["John@123","Joe@123","Mac@123","Jack@123"];
    checkLogin(){
        console.log('check called');
        var a=this.info.indexOf(this.userName);
        if(a!=-1 || this.pass[a]!=this.userPass){
            this.valid=true;
            this.firstWord=Math.round(Math.random()*5);
        }
        else{
            this.valid=false;
        }
    }
}

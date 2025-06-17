import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,ProfileComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Ajit Yadav';
  x=56;
  y=100;
  name:string="Ajit Yadav"
  data:string|number="Mohan";
  other:any=3434;

  updateName(){
    this.name="Rohan"
    // this.name = 3434; //this will give an error 
    this.data=45;
    this.other=true;
    this.other=343645;
    this.other={};
    console.log(this.name);
    console.log(this.other);
    console.log(this.data);
  }

  updateVar(){
    let x:number = 30;
    console.log(x);
  }

  sum(a:number,b:number){
    console.log(a+b);
  }
}

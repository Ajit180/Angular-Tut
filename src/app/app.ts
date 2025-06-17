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
  handleclick(){
    console.log("Button is Clicked");
    this.otherFunction(); // why this => because this denotes to this whole class
  }

  otherFunction(){
    console.log("Other Function is Called");
  }
}

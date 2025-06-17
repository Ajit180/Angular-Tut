import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Ajit Yadav';
  x=56;
  y=100;
}

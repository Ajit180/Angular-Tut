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
    
   count:number=0;
   
    //  increment(){
    //    this.count++;
    //  }

    //  decrement(){
    //   this.count--;
    //  }

    //  reset(){
    //   this.count=0;
    //  }

     handlecounter(val:string){
       if(val=='plus'){
        this.count=this.count+1
       }
       else if(val=='minus'){
        this.count=this.count-1;
       }
       else{
        this.count=0;
       }
     }
}

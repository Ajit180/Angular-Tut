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
    
  //  count:number=0
  //    handlecounter(val:string){
  //      if(val=='plus'){
  //       this.count=this.count+1
  //      }
  //      else if(val=='minus'){
  //       this.count=this.count-1;
  //      }
  //      else{
  //       this.count=0;
  //      }
  //    }

  handleEvent(event:any){
    console.log("Function called type",event.type);
    console.log("Function called target",event.target.name);
    console.log("function called event",(event.target as Element).className)
  }


  handleEventM(event:MouseEvent){
    console.log("Function called ",event.type);
}

}


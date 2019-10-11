import { Component } from '@angular/core';
import {UserService} from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent {
//   oddNumbers: number []=[];
//   evenNumbers: number []=[];
//   title = 'MyFirstApp';
// // showSecret=false;
// // log=[];
// // onToggleDetails()
// // {
// //   this.showSecret=!this.showSecret;
// //   this.log.push(this.log.length+1);
// // }
// onIntervalFired(firedNumber:number)
// {
//   console.log(firedNumber);

//   if(firedNumber%2===0)
//   {
//       console.log("even"+firedNumber);
//     this.evenNumbers.push(firedNumber);
//   }else{this.oddNumbers.push(firedNumber);}
// }
// onPauseGame(firedNumber:number)
// {
//   console.log(firedNumber);
// }

loadedFeature='recipe';
onNavigate(feature:string){
  //console.log("onNavigate called");
  //console.log("loadedFeature"+ this.loadedFeature);
console.log("feature"+feature);
this.loadedFeature=feature;

}




}




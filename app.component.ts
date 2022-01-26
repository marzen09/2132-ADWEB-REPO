import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation Demo';
  appName = 'One way data binding example.';

  header1 = 'Number Interpolation';
  //numeric binding
  n1 = 60;
  n2 = 30;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;

  //property binding
  clientName:string = "Marzen";

  //style binding
  appliedCSSClass = "green";
  notappliedCSS = true;
  myColor = "red";

  //two way data binding
  showData($event:any){
    console.log("Button Clicked!")
  }

  //keyup function
  getData(data:any){
    console.warn(data)
  }
}
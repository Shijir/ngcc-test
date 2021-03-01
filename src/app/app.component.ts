import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  devs = [
    { name: "Scott", status: "creating awesome things"},
    { name: "Matt",  status: "making cool things"},
    { name: "Jeremy", status: "building wonderful stuff"},
  ];

}

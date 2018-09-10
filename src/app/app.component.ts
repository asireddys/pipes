import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username= 'ramanareddy';
  todaydate=new Date();
  months=["Jan","Feb","Mar","April","May","Jun","July","Aug","Sept","oct","Nov","Dec"];
  jsonval={name:'Ramanareddy',age:'24',adress:{a1:'Hyderbad',a2:'Warangal'}};
}

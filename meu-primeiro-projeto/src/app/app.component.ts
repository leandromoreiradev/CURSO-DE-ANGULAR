import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(){}
  
  ngOnInit(): void {
    setTimeout(() => {
      console.log(1)
    }, 5000);
  }
  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public addValue: number = 0;
  public getDados: {nome: string, idade: number} | undefined;

  constructor(){}

  ngOnInit(): void {
    setTimeout(() => {
      console.log(1)
    }, 5000);
  }

  public add() {
     this.addValue +=  1;
  }

  public setDados(event: {nome: string, idade: number}) {
    this.getDados = event;
  }

}

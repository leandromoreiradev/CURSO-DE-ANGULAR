import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit{

  @Output()
  public enviarDados = new EventEmitter(); // cria um atributo que pode enviar um evento

  public list:Array<{nome: string, idade: number}> = [
    {nome: "Dener", idade: 29},
    {nome: "Nay", idade: 31},
    {nome: "Jose", idade: 58}

  ]

  ngOnInit(): void {

  }

  public getDados(event: number): void {
    this.enviarDados.emit(this.list[event]); // enviando o evento
  }

}

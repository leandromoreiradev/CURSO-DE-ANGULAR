import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit{

  //O @Input serve para ser uma entrada de dados para o este component filho vindo do component pai
  @Input()
   public contador: number = 0;

  ngOnInit(): void{

  }

}

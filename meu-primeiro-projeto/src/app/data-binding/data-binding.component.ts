import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit{

  public nome: string = "Dener";
  public idade: number = 29;
  public checkedDisabled: boolean = false;

  public position: {x: number, y: number} = {x: 0, y: 0};

  public imgSrc: string = "https://vidafullstack.com.br/wp-content/uploads/2021/12/banner.jpg"
  public imgTitle: string = "Property Binding";

  constructor() {

  }

  ngOnInit(): void {

  }

  public alertaInfo(valor: any) {
   console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent) {
    console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

  public doubleClickEvent(valor: MouseEvent) {
    console.log(valor);
  }
}

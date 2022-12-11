import { Component, OnInit } from '@angular/core';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit{

  public valor: boolean = true;
  public height: string = "20px";
  public backgroundColor: string = "tomato";
  public nome: string = "";
  public list: Array<{nome: string}> = [];
  public date: Date = new Date();



  ngOnInit(): void {

    setInterval(()=>{
      if(this.valor){
        this.valor = false;
      } else {
        this.valor = true
      }

      if(this.height == "20px") {
        this.height = "50px";
        this.backgroundColor = "yellow";
      } else {
      this.height = "20px";
      this.backgroundColor = "tomato";
      }

    }, 2000)

  }

  public salvar() {
    this.list.push({nome: this.nome})
    this.nome = "";
  }
}

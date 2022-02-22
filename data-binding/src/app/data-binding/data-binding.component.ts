import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css'],
  styles:[
    `.highlight{
      background-color: yellow;
      font-weight: bold;
  }`
  ]

})
export class DataBindingComponent implements OnInit {
    valorAtual:string='';
    valorSalvo:any;
    url:string='https://www.cursoemvideo.com/';
    cursoAngular:boolean=true;
    url1='http://lorempixel.com.br/400/200';
    isMouseOver:boolean=false;
    getValor(){
      return 1;
    }
    getCurtirCurso(){
      return true;
    }
    botaoClicado(){
      alert('botão Clicado')
    }
    onKeyUp(evento:KeyboardEvent){
      console.log((<HTMLInputElement>evento.target).value);
      this.valorAtual=(<HTMLInputElement>evento.target).value;

    }
    salvarValor(valor:String){
      this.valorSalvo=valor;
    }
    onMouseOverOut(){
      this.isMouseOver=!this.isMouseOver
    }
  constructor() { }

  ngOnInit(): void {
  }

}

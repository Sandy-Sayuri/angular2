import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  //inputs:['nomeCurso:nome']
})
export class InputPropertyComponent implements OnInit {
  @Input('nome')
  nomeCurso:string='';
  outraVariavel:any;
  constructor() { }

  ngOnInit(): void {
  }

}

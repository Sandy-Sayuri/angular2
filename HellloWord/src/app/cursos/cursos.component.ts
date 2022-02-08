import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  nomePortal:string;
  cursos:any =[];
  constructor(private cursosService : CursosService) { 
    this.nomePortal="https://www.cursoemvideo.com";
    this.cursos=this.cursosService.getCursos();
    //var servico = new CursosService();
  }

  ngOnInit(): void {
  }

}

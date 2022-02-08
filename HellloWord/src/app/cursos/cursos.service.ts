import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
//htpp
  constructor() { }
  getCursos(){
    return['Java','HTML','CSS']
  }
}

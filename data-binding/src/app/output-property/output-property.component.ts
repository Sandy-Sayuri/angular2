import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  @Input()
  numero:number = 0;
  incrementa(){
    this.numero++;
  }
  decrementar(){
    this.numero--;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

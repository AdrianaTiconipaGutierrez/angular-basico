import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
heroes: string[] =['a','b','c', 'd'];
heroeBorrado:string ='';

heroeBorrar(){
  this.heroeBorrado = this.heroes.shift() || '';
}

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Favorito, Juego } from '../interfaces/juego.interface';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newNombre: string = '';

  juegos: Juego = {
    nombre: 'Ricardo',
    favoritos: [{
      id: 1,
      nombre: 'GOW'
    },
  {
    id: 2,
    nombre: 'Halo'
  }]
  }

  @ViewChild('miFormulario') miFormulario! : NgForm;

  guardar(): void{
    let index = this.juegos.favoritos.length;
    let favoritoNew: Favorito = {
      id: (index + 1),
      nombre: this.newNombre
    }

    this.juegos.favoritos.push({...favoritoNew});
    this.newNombre = '';
  }

  eliminar(index: number): void{
    this.juegos.favoritos.splice(index, 1);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormModel } from '../interfaces/form.model';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formInit: FormModel = {
    producto: 'RGF 854kl',
    precio: 0,
    existencias: 0
  }

  @ViewChild('miFormulario') miFormulario!: NgForm;

  validadorNombre(): boolean{
    if (this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched) {
      this.miFormulario?.controls['producto']?.setErrors({'Error': 'No es valido el campo'});
      return true; 
    }
    return false;
  }

  validadorPrecio(): boolean{
    if ((this.miFormulario?.controls['precio']?.dirty || this.miFormulario?.controls['precio']?.touched) && (this.miFormulario?.controls['precio']?.invalid || isNaN(this.miFormulario?.controls['precio']?.value))) {
      this.miFormulario?.controls['precio']?.setErrors({'Error': 'No es valido el campo'});
      return true;
    }
    return false;
  }

  guardar(){
    this.miFormulario.resetForm({
      producto: 'Ingrese un valor',
      precio: 0,
      existencia: 0
    });
    console.log('Guardando datos...');
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this.formBuilder.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    tyc: [true, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: false
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({...this.persona, tyc: true});

    //Observar cambios en todos los campos
    this.miFormulario.valueChanges.subscribe(({tyc, ...rest}) =>{
      // delete form.tyc;
      this.persona = rest;
    });

    //Observar cambios en un campo "Terminos y Condiciones"
    this.miFormulario.get('tyc')?.valueChanges.subscribe(val => {
      console.log(val);
    })
  }

  guardar(){
    const values = this.miFormulario.value;
    delete values.tyc;
    this.persona = values;
  }
}

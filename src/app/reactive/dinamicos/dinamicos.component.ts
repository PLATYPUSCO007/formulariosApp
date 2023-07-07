import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Lego', Validators.required],
      ['MineCraft', Validators.required]
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.formBuilder.control('', Validators.required);

  constructor(private formBuilder: FormBuilder) { }

  get ArrayFavoritos(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  agregarFavorito(): void{
    if (this.nuevoFavorito.invalid) {
      return;
    }

    this.ArrayFavoritos.push( this.formBuilder.control(this.nuevoFavorito.value, Validators.required) );
    // this.ArrayFavoritos.push( new FormControl(this.nuevoFavorito.value, Validators.required) );
    this.nuevoFavorito.reset();
  }

  borrarFavorito(i: number){
    this.ArrayFavoritos.removeAt(i);
  }

  fieldNotIsValid(field: string): boolean{
    return (this.miFormulario.controls[field].errors && this.miFormulario.controls[field].touched)!;
  }

  ngOnInit(): void {
  }

  guardar(): void{
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    
  }

}

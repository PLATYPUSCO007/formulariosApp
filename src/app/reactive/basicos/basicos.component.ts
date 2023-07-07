import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  chargePercent: string = '🚓';

  // miFormulario: FormGroup = new FormGroup({
  //   producto: new FormControl('RTX 900')
  // });

  miFormulario: FormGroup = this.formBuilder.group({
    producto: [, [Validators.required, Validators.minLength(4)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencia: [0, [Validators.required, Validators.min(0)]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.percent(100, 10);
  }

  campoNoEsValido(campo: string): boolean{
    return (this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched)!;
  }

  guardar(): void{
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.miFormulario.reset({
      producto: 'hjgvgvg',
      precio: 0,
      existencia: 0
    });
  }

  percent(percentage: number, numSymbols: number = 10): void{
    const numOfSymbols = numSymbols;
    const fills = Math.round(percentage * numOfSymbols / 100);

    const empty = numOfSymbols - fills;

    this.chargePercent = "🌕".repeat(fills) + "🌑".repeat(empty);
  }

}

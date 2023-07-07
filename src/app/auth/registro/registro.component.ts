import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AsyncEmailValidatorService } from 'src/app/shared/services/async-email-validator.service';
import { ValidatorService } from 'src/app/shared/services/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this._serValidator.patternName)]],
    email: ['', [Validators.required, Validators.pattern(this._serValidator.patternEmail)], [this._serEamilValidator]],
    confirm_email: ['', [Validators.required]],
    username: ['', [Validators.required, this._serValidator.noPlatypuscoValid ]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirm_password: ['', [Validators.required]],
  },{
    validators: [this._serValidator.equalValues('password', 'confirm_password'), this._serValidator.equalValues('email', 'confirm_email')]
  });

  get messageEmail(): string{
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.['required']) {
      return 'El valor es obligatorio.';
    }
    if (errors?.['existsEmail']) {
      return 'El email ya existe.';
    }
    if (errors?.['pattern']) {
      return 'El valor no tiene formato de email.';
    }
    
    return '';
  }
  
  constructor(private fb: FormBuilder,
              private _serValidator: ValidatorService,
              private _serEamilValidator: AsyncEmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      email: 'test1@test.com'
    })
  }
  
  campoNoValido(campo: string){
    return (this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched);
  }

  envioFormulario(){
    console.log(this.miFormulario.value);
    
    this.miFormulario.markAllAsTouched();
  }

}

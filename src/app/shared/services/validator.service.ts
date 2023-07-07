import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public patternName: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public patternEmail: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() { }

  noPlatypuscoValid(control: FormControl): ValidationErrors | null{
    const nickName: string = control.value?.trim().toUpperCase();

    if (nickName == 'PLATYPUSCO') {
      return {
        noPlatypusco: true
      };
    }

    return null;
  }

  equalValues(campo1: string, campo2: string){
    return (formGroup: AbstractControl): ValidationErrors | null =>{
      if (formGroup.get(campo1)?.value !== formGroup.get(campo2)?.value) {
        formGroup.get(campo2)?.setErrors({
          noEquals: true
        });
        return {
          noEquals: true
        };
      }

      formGroup.get(campo2)?.setErrors(null);
      return null;
    }
  }
}

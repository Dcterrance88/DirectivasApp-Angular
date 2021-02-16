import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  public miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required ]
  });

  constructor(private fb: FormBuilder) { }

  public tieneError(campo : string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

}

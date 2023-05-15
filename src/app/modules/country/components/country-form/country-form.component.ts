import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss']
})
export class CountryFormComponent implements OnInit {

  formulario: FormGroup;
  submitted = false;
  nombreControl: FormControl;
  capitalControl: FormControl;
  poblacionControl: FormControl;
  banderaControl: FormControl;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      bandera: ['', [Validators.required, Validators.pattern(/\.png$/)]],
      nombre: ['', [Validators.required]],
      capital: ['', [Validators.required]],
      poblacion: ['']
    });

    this.nombreControl = this.formulario.controls['nombre'] as FormControl;
    this.capitalControl = this.formulario.controls['capital'] as FormControl;
    this.poblacionControl = this.formulario.controls['poblacion'] as FormControl;
    this.banderaControl = this.formulario.controls['bandera'] as FormControl;
  }

  get f(): any {
    return this.formulario.controls;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;

    if (this.formulario.invalid) {
      return;
    }

    const nombreOriginal = this.formulario.controls['nombre'].value;
    this.formulario.controls['nombre'].setValue(nombreOriginal.toUpperCase());

    //do something
    console.log(this.formulario.value)
  }

}

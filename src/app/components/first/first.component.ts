import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Api } from 'src/app/interfaces/api.model';
import { ServicioService } from 'src/app/services/servicio.service';
import { PokenAPIResponse, Pokemon } from '../../interfaces/responses';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, OnDestroy {

  // private http: HttpClient
  apis:Api[] = [];
  apiForm: FormGroup;
  constructor(public servicio:ServicioService, private route:Router,
              private fb: FormBuilder) {
                this.apiForm = this.fb.group({
                  ID:          [null,[Validators.required]],
                  API:         [null,[Validators.required]],
                  Description: [null,[Validators.required]],
                  Auth:        [null,[Validators.required]],
                  HTTPS :      [false,[Validators.required]],
                  Cors:        [null,[Validators.required]],
                  Link:        [null,[Validators.required]],
                  Category:    [null,[Validators.required]],
                })
              }
 
  async ngOnInit() {
    this.apis = this.servicio.obtenerDatos();
    console.log(this.apis)
  }

  ngOnDestroy(): void {
    console.log('El componente first se destruyo')

  }

  verMas(id:number){
    this.route.navigate(['/segundo',id])
    console.log(id)
  }

  agregarApi(){
    if(this.apiForm.valid){
      console.log(this.apiForm.value);
      this.servicio.agregarApi(this.apiForm.value);
      this.servicio.obtenerDatos();
    }else{
      console.log('invalido')
    }
    
  }

  guardarCambios(){
    if (this.apiForm.valid){
      this.apis = this.servicio.editarApi(this.apiForm.value);
    }
  }

 editarApi(api:Api){
    this.apiForm.controls['ID'].setValue(api.ID)
    this.apiForm.controls['API'].setValue(api.API)
    this.apiForm.controls['Description'].setValue(api.Description)
    this.apiForm.controls['Auth'].setValue(api.Auth)
    this.apiForm.controls['HTTPS'].setValue(api.HTTPS)
    this.apiForm.controls['Cors'].setValue(api.Cors)
    this.apiForm.controls['Link'].setValue(api.Link)
    this.apiForm.controls['Category'].setValue(api.Category)
 }

  eliminarApi(id:number){
      this.apis = this.servicio.eliminarApi(id);
      console.log(this.servicio.datos)
  }
 
}



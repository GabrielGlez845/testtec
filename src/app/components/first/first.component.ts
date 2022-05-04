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
  constructor(private servicio:ServicioService, private route:Router,
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
    this.apis = this.servicio.obtenerDatos()
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
    }else{
      console.log('invalido')
    }
    
  }
 
}



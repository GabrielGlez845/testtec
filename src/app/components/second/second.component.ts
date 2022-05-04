import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  api : any
  constructor(private route:ActivatedRoute,private servicio: ServicioService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    const apis = this.servicio.obtenerDatos();

    apis.forEach(api => {
      if (api.ID == id){
        this.api = api
      }
    });

  }

}

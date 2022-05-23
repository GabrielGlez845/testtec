import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../services/servicio.service';
import { Api } from '../../interfaces/api.model';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private servicioService:ServicioService) { }

  apis:Api[] = []
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['termino'])
      this.apis = this.servicioService.buscarApi(params['termino'])
    });
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  datos:any[] = []
  constructor() { 
    this.datos = [
      {
        "ID" : 1,
        "API": "AdoptAPet",
        "Description": "Resource to help get pets adopted",
        "Auth": "apiKey",
        "HTTPS": true,
        "Cors": "yes",
        "Link": "https://www.adoptapet.com/public/apis/pet_list.html",
        "Category": "Animals"
      },
      {
        "ID" : 2,
        "API": "Axolotl",
        "Description": "Collection of axolotl pictures and facts",
        "Auth": "",
        "HTTPS": true,
        "Cors": "no",
        "Link": "https://theaxolotlapi.netlify.app/",
        "Category": "Animals"
      },
      {
        "ID" : 3,
        "API": "Cat Facts",
        "Description": "Daily cat facts",
        "Auth": "",
        "HTTPS": true,
        "Cors": "no",
        "Link": "https://alexwohlbruck.github.io/cat-facts/",
        "Category": "Animals"
      },
      {
        "ID" : 4,
        "API": "Cataas",
        "Description": "Cat as a service (cats pictures and gifs)",
        "Auth": "",
        "HTTPS": true,
        "Cors": "no",
        "Link": "https://cataas.com/",
        "Category": "Animals"
      },
      {
        "ID" : 5,
        "API": "Cats",
        "Description": "Pictures of cats from Tumblr",
        "Auth": "apiKey",
        "HTTPS": true,
        "Cors": "no",
        "Link": "https://docs.thecatapi.com/",
        "Category": "Animals"
      },
      {
        "ID" : 6,
        "API": "Dog Facts",
        "Description": "Random dog facts",
        "Auth": "",
        "HTTPS": true,
        "Cors": "yes",
        "Link": "https://dukengn.github.io/Dog-facts-API/",
        "Category": "Animals"
      },
      {
        "ID" : 7,
        "API": "Shark Facts",
        "Description": "Random facts of Dogs",
        "Auth": "",
        "HTTPS": true,
        "Cors": "yes",
        "Link": "https://kinduff.github.io/dog-api/",
        "Category": "Animals"
      },
      {
        "ID" : 8,
        "API": "Dogs",
        "Description": "Based on the Stanford Dogs Dataset",
        "Auth": "",
        "HTTPS": true,
        "Cors": "yes",
        "Link": "https://dog.ceo/dog-api/",
        "Category": "Animals"
      },
      {
        "ID" : 9,
        "API": "eBird",
        "Description": "Retrieve recent or notable birding observations within a region",
        "Auth": "apiKey",
        "HTTPS": true,
        "Cors": "no",
        "Link": "https://documenter.getpostman.com/view/664302/S1ENwy59",
        "Category": "Animals"
      },
      {
        "ID" : 10,
        "API": "FishWatch",
        "Description": "Information and pictures about individual fish species",
        "Auth": "",
        "HTTPS": true,
        "Cors": "yes",
        "Link": "https://www.fishwatch.gov/developers",
        "Category": "Animals"
      }
    ]
  }

  obtenerDatos():any[]{
    return this.datos
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cambiarEstado = true;
  names = ['Gabriel','Marco','Sergio','Alex']
  title = 'testtec';

  cambiar(){
    this.cambiarEstado= !this.cambiarEstado
  }

  
}

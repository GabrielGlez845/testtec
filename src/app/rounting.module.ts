import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
  { path: 'inicio', component: FirstComponent },
  { path: 'segundo/:id', component: SecondComponent },
  { path: 'buscar/:termino', component: BuscadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RountingModule { }

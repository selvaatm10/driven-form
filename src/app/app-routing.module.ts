import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RdfComponent } from './rdf/rdf.component';
import { TdfComponent } from './tdf/tdf.component';


const routes: Routes = [
  {
    path: 'rdf',
    component:RdfComponent
  },
  {
    path: 'tdf',
    component:TdfComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

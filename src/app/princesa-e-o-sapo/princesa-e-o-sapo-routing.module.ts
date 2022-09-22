import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincesaEOSapoPage } from './princesa-e-o-sapo.page';

const routes: Routes = [
  {
    path: '',
    component: PrincesaEOSapoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincesaEOSapoPageRoutingModule {}

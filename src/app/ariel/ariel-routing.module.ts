import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArielPage } from './ariel.page';

const routes: Routes = [
  {
    path: '',
    component: ArielPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArielPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincesaEOSapoPageRoutingModule } from './princesa-e-o-sapo-routing.module';

import { PrincesaEOSapoPage } from './princesa-e-o-sapo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincesaEOSapoPageRoutingModule
  ],
  declarations: [PrincesaEOSapoPage]
})
export class PrincesaEOSapoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrancaDeNevePageRoutingModule } from './branca-de-neve-routing.module';

import { BrancaDeNevePage } from './branca-de-neve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrancaDeNevePageRoutingModule
  ],
  declarations: [BrancaDeNevePage]
})
export class BrancaDeNevePageModule {}

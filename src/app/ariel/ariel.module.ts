import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArielPageRoutingModule } from './ariel-routing.module';

import { ArielPage } from './ariel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArielPageRoutingModule
  ],
  declarations: [ArielPage]
})
export class ArielPageModule {}

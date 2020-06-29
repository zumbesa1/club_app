import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartydetailPageRoutingModule } from './partydetail-routing.module';

import { PartydetailPage } from './partydetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartydetailPageRoutingModule
  ],
  declarations: [PartydetailPage]
})
export class PartydetailPageModule {}

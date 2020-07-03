import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PartyDetailPage } from './party-detail.page';
import { CreateBookingPage } from 'src/app/bookings/create-booking/create-booking.page';

const routes: Routes = [
  {
    path: '',
    component: PartyDetailPage
  },
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PartyDetailPage, CreateBookingPage],
  entryComponents: [CreateBookingPage]

})
export class PartyDetailPageModule {}

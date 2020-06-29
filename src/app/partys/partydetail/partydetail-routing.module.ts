import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartydetailPage } from './partydetail.page';

const routes: Routes = [
  {
    path: '',
    component: PartydetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartydetailPageRoutingModule {}

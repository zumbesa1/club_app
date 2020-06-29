import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartysPage } from './partys.page';

const routes: Routes = [
  {
    path: '',
    component: PartysPage
  },
  {
    path: 'partydetail',
    loadChildren: () => import('./partydetail/partydetail.module').then( m => m.PartydetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartysPageRoutingModule {}

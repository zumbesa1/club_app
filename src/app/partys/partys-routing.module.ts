import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartysPage } from './partys.page';

const routes: Routes = [
  {
    path: '',
    component: PartysPage
  },
  {
    path: 'partyId',
    loadChildren: () => import('./party-detail/party-detail.module').then( m => m.PartyDetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartysPageRoutingModule {}

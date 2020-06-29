import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { PartyDetailPageModule } from '../partys/party-detail/party-detail.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'partys',
        children: [
          {path: '', loadChildren: () => import('../partys/partys.module').then( m => m.PartysPageModule)},
          {path: ':partyId', loadChildren: () => PartyDetailPageModule} 
          // '../partys/party-detail/party-detail.module#PartyDetailPageModule'}
          // Morgen nachfrage wieso hier der link manchmal funktioniert und manchmal nicht
        ]
      },
      {
        path: 'favorites',
        children: [
          {
            path: '',
            loadChildren: () => import('../favorites/favorites.module').then( m => m.FavoritesPageModule)
          },
        ]
      },
      { path: '',  redirectTo: 'tabs/partys',  pathMatch: 'full' },
    ]
  },
  { path: '',  redirectTo: 'tabs/partys',  pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

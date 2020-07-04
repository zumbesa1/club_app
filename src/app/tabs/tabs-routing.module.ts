import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { PartyDetailPageModule } from '../partys/party-detail/party-detail.module';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'partys',
        children: [
          {path: '',
          loadChildren: () => import('../partys/partys.module').then( m => m.PartysPageModule),
          canLoad: [AuthGuard]},
          {path: ':partyId',
          loadChildren: () => import('../partys/party-detail/party-detail.module').then(m => m.PartyDetailPageModule),
          canLoad: [AuthGuard]}
        ]
      },
      {
        path: 'favorites',
        children: [
          {
            path: '',
            loadChildren: () => import('../favorites/favorites.module').then( m => m.FavoritesPageModule),
            canLoad: [AuthGuard]
          },
        ]
      },
      { path: '',  redirectTo: 'tabs/partys',  pathMatch: 'full' , canLoad: [AuthGuard]},
    ]
  },
  { path: '',  redirectTo: 'tabs/partys',  pathMatch: 'full', canLoad: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

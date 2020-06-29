import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {path: '', loadChildren: () => import('../partys/partys.module').then( m => m.PartysPageModule)}
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () => import('../favorites/favorites.module').then( m => m.FavoritesPageModule)
          },
        ]
      },
      { path: '',  redirectTo: 'tabs/tab1',  pathMatch: 'full' },
    ]
  },
  { path: '',  redirectTo: 'tabs/tab1',  pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

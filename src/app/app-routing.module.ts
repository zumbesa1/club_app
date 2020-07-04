import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)},
  {path: 'bookings', loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule)},
  //{path: 'partys', loadChildren: () => import('./partys/partys.module').then(m => m.PartysPageModule)},
  //{path: 'favorites', loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesPageModule)},
  //{path: 'party-detail', loadChildren: () => import('./partys/party-detail/party-detail.module').then(m => m.PartyDetailPageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

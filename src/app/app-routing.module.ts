import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)},
  {path: 'bookings',
   loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule),
   canLoad: [AuthGuard]},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

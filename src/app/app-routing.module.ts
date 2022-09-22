import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cinderela',
    loadChildren: () => import('./cinderela/cinderela.module').then( m => m.CinderelaPageModule)
  },  {
    path: 'branca-de-neve',
    loadChildren: () => import('./branca-de-neve/branca-de-neve.module').then( m => m.BrancaDeNevePageModule)
  },
  {
    path: 'ariel',
    loadChildren: () => import('./ariel/ariel.module').then( m => m.ArielPageModule)
  },
  {
    path: 'princesa-e-o-sapo',
    loadChildren: () => import('./princesa-e-o-sapo/princesa-e-o-sapo.module').then( m => m.PrincesaEOSapoPageModule)
  },
  {
    path: 'aladdin',
    loadChildren: () => import('./aladdin/aladdin.module').then( m => m.AladdinPageModule)
  },
  {
    path: 'frozen',
    loadChildren: () => import('./frozen/frozen.module').then( m => m.FrozenPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

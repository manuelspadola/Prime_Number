import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeComponent } from './prime/prime.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'prime',
    pathMatch: 'full',
    //component: PrimeComponent// damit legen wir fest, dass diese Route nur dann gilt wenn / aufgerufen wird,
  },                   // nicht aber dann wenn diese URL nur als Präfix einer anderen aufgerufen wird
  {
    path: 'prime',
    component: PrimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

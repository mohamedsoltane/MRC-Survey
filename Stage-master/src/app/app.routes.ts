import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingComponent } from './rating/rating.component';
import { RedirectComponent } from './redirect/redirect.component';
import { CongratsComponent } from './congrats/congrats.component';

const routes: Routes = [
  {component:RatingComponent,path:"rating"},
  {component:RedirectComponent,path:"redirect"},
  {component:CongratsComponent,path:"congrats"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

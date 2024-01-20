import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { VenteComponent } from './vente/vente.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent,children:[
    {path: 'overview',component: OverviewComponent},
    {path: 'vente',component:VenteComponent}
  ]},
  {path: '**', redirectTo: 'home/overview'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

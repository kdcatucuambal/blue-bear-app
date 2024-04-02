import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DigimonsPage} from "./digimons/digimons.page";
import {DigimonDetailPage} from "./digimon-detail/digimon-detail.page";



const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'digimons',
    component: DigimonsPage
  },
  {
    path: 'digimon-detail/:id',
    component: DigimonDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NvgRoutingModule {}

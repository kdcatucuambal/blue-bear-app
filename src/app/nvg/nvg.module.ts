import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {NvgRoutingModule} from "./nvg-routing.module";
import {DigimonDetailPage} from "./digimon-detail/digimon-detail.page";
import {DigimonsPage} from "./digimons/digimons.page";



@NgModule({
  declarations: [
    DigimonsPage,
    DigimonDetailPage,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NvgRoutingModule,
    SharedModule
  ]
})
export class NvgModule { }

import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DigimonsService } from '../../services/digimons.service';
import { concatMap } from 'rxjs';
import { Digimon } from '../../interfaces/digimon.interface';

@Component({
  selector: 'app-digimon-detail',
  templateUrl: 'digimon-detail.page.html',
  styleUrls: ['digimon-detail.page.scss']
})
export class DigimonDetailPage implements OnInit {

  public digimon: Digimon = {} as Digimon;
  public loading = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private digimonsService: DigimonsService
    ) {
  }


  ngOnInit() {
    this.activatedRoute.params.pipe(
      concatMap(({id}) => this.digimonsService.getDigimonById(id))
    ).subscribe((data) => {
      this.digimon = data;
      this.loading = false;
    }
    );
  }

  get levelHtml(){
    return this.digimon.levels.map((level) => level.level).join('<br>');
  }

  get typeHtml(){
    return this.digimon.types.map((type) => type.type).join('<br>');
  }

  get attributeHtml(){
    return this.digimon.attributes.map((attribute) => attribute.attribute).join('<br>');
  }







}

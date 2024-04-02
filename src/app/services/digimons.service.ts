import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Digimon, DigimonResponse } from '../interfaces/digimon.interface';

@Injectable({
  providedIn: 'root'
})
export class DigimonsService {

  private urlInitial = 'https://digi-api.com/api/v1/digimon?pageSize=20&page=0';

  constructor(
    private http: HttpClient
  ) { }


  getDigimons(url: string = this.urlInitial){
    return this.http.get<DigimonResponse>(url)
  }

  getDigimonById(id: number){
    return this.http.get<Digimon>(`https://digi-api.com/api/v1/digimon/${id}`)
  }


}

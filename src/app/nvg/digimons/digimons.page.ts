import {Component, OnInit} from '@angular/core';
import { DigimonsService } from '../../services/digimons.service';
import { DigimonResponse, SimpleDigimon } from '../../interfaces/digimon.interface';
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-digimons',
  templateUrl: 'digimons.page.html',
  styleUrls: ['digimons.page.scss']
})
export class DigimonsPage implements OnInit {

  public data: DigimonResponse = {} as DigimonResponse;
  public loading = true;


  constructor(
    private digimonsService: DigimonsService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.digimonsService.getDigimons().subscribe((data) => {
        this.data = data;
        this.loading = false;
      }
    );
    }

onLogout() {
    this.authService.closeSession();
    this.router.navigate(['/auth/login']).then();
}
  onShowDetail(digimon: SimpleDigimon) {
    this.router.navigate(['/pages/digimon-detail', digimon.id]).then();
  }

  onHandleImageError(event: any) {
    event.target.src = 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg';
  }

  onIonInfinite(event: any) {
    if (this.data.pageable.currentPage == this.data.pageable.totalPages) {
      event.target.disabled = true;
      return;
    }

    setTimeout(() => {
      this.digimonsService.getDigimons(this.data.pageable.nextPage).subscribe((data) => {
        this.data.content = this.data.content.concat(data.content);
        this.data.pageable = data.pageable;
        event.target.complete();
      });
    }, 500);

  }

}

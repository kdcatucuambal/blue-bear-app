import {Component, OnInit} from '@angular/core';
import { VerifyCodeRq} from "../../interfaces/auth.interface";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IonInput, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.page.html',
  styleUrls: ['./verify-code.page.scss'],
})
export class VerifyCodePage implements OnInit {

  verifyCodeRq: VerifyCodeRq = {
    confirmationCode: "",
    username: ""
  }

  isLoading = false;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toast: ToastController,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
        this.verifyCodeRq.username = params['user']
      }
    );
  }

  onVerifyCode(code: IonInput) {
    const codeValue = code.value?.toString().trim();
    if (!codeValue){
      return;
    }
    this.verifyCodeRq.confirmationCode = codeValue;
    this.isLoading = true;
    this.authService.verifyCode(this.verifyCodeRq).subscribe({
      next: (data) => {
        this.router.navigate(['/auth/login']).then();
      },
      error: (error) => {
        this.presentToast('No se pudo verificar el código').then();
      },
      complete: () => {
        this.isLoading = false;
        this.verifyCodeRq = {} as VerifyCodeRq;
      }
    })

  }

  async presentToast(message: string) {
    const toast = await this.toast.create({
      message,
      duration: 2000,
    });
    toast.present().then();
  }

}

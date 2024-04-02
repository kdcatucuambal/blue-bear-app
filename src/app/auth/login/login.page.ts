import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {LoginRq} from "../../interfaces/auth.interface";
import {IonInput, ToastController} from '@ionic/angular';
import {validateEmail, validatePassword} from "../../util/app.util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  loginRq: LoginRq = {
    authentication: {
      login: "",
      password: ""
    }
  }

  isLoading = false;

  constructor(
    private authService: AuthService,
    private toast: ToastController,
    private router: Router
  ) {
  }

  onLogin(email: IonInput, password: IonInput) {

    const emailValue = email.value?.toString().trim();
    const passwordValue = password.value?.toString().trim();

    if (!emailValue || !passwordValue) {
      this.presentToast('Campos incorrectos').then();
      return;
    }

    if (!validateEmail(emailValue)) {
      this.presentToast('El email no es válido').then();
      return;
    }

    if(passwordValue.length < 8){
      this.presentToast('La contraseña con pocos dígitos').then();
    }

    this.loginRq.authentication.login = emailValue;
    this.loginRq.authentication.password = passwordValue;

    this.isLoading = true;

    this.authService.login(this.loginRq)
      .subscribe(
        {
          next: (data) => {
            this.authService.setToken(data.authenticationResult.credentials.accessToken);
            this.router.navigate(['/pages/digimons']).then();
          },
          error: error => {
            this.presentToast('Credenciales incorrectas').then();
          },
          complete: () => {
            this.isLoading = false;
            this.loginRq = {} as LoginRq;
          }
        },
      );

  }

  onGoToSignUp() {
    this.router.navigate(['/auth/signup']).then();
  }

  async presentToast(message: string) {
    const toast = await this.toast.create({
      message,
      duration: 2000,
    });
    toast.present().then();
  }

}

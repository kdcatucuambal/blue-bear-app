import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {IonInput, ToastController} from "@ionic/angular";
import {LoginRq, SignupRq} from "../../interfaces/auth.interface";
import {validateEmail, validatePassword} from "../../util/app.util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  signupRq: SignupRq = {} as SignupRq;

  isLoading = false;

  constructor(
    private authService: AuthService,
    private toast: ToastController,
    private router: Router,
  ) {
  }


  onSignUp(
    username: IonInput,
    email: IonInput,
    password: IonInput,
    confirmPassword: IonInput,
  ) {

    const usernameValue= username.value?.toString().trim();
    const emailValue = email.value?.toString().trim();
    const passwordValue = password.value?.toString().trim();
    const confirmPasswordValue = confirmPassword.value?.toString().trim();


    if (!usernameValue || !emailValue || !passwordValue || !confirmPasswordValue) {
      this.presentToast('Campos incorrectos').then();
      return;
    }


    const firstName = usernameValue.split(' ')[0];
    const lastName = usernameValue.split(' ')[1];

    if (firstName === undefined || lastName === undefined) {
      this.presentToast('Nombre y apellido son requeridos').then();
      return;
    }

    if (!validateEmail(emailValue)) {
      this.presentToast('El email no es válido').then();
      return;
    }

    if (passwordValue !== confirmPasswordValue) {
      this.presentToast('Las contraseñas no coinciden').then();
      return;
    }

    if (!validatePassword(passwordValue)) {
      this.presentToast('La contraseña es muy débil').then();
      return;
    }



    this.signupRq = {
      authentication: {
        password: passwordValue,
        login: `${firstName.toLowerCase()}_${lastName.toLowerCase()}`
      },
      attributes: {
        name: firstName,
        lastName: lastName,
        phoneNumber: '+593991744850',
        email: emailValue
      }
    }

    this.isLoading = true;
    this.authService.signup(this.signupRq).subscribe(
      {
        next: (data) => {
          const {login} = this.signupRq.authentication;
          this.resetValues();
          this.router.navigate(['/auth/verify-code', login]).then();
        },
        error: error => {
          this.presentToast('Error al registrarse').then();
          this.resetValues();
        }
      }
    );
  }

  private resetValues(){
    this.signupRq = {} as SignupRq;
    this.isLoading = false;
  }

  async presentToast(message: string) {
    const toast = await this.toast.create({
      message,
      duration: 2000,
    });
    toast.present().then();
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRq, LoginRs, SignupRq, SignUpRs, VerifyCodeRq, VerifyCodeRs} from "../interfaces/auth.interface";
import {jwtDecode} from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private X_API_KEY = 'u2NKYIjc2D8tzdFM1mcp7370NsTRgaPs4W1kpiRw'
  private X_REQUEST_ID = '1050309275'

  url = "https://4emedkwtmf.execute-api.us-east-1.amazonaws.com/v1"
  constructor(
    private http: HttpClient
  ) { }

  private getOptions(){
    return {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.X_API_KEY,
        'x-request-id': this.X_REQUEST_ID
      }
    }
  }


  login(data: LoginRq){
    return this.http.post<LoginRs>(`${this.url}/auth/login`, data, this.getOptions())
  }

  signup(data: SignupRq){
    return this.http.post<SignUpRs>(`${this.url}/auth/sign-up`, data, this.getOptions())
  }

  verifyCode(data: VerifyCodeRq){
    return this.http.post<VerifyCodeRs>(`${this.url}/auth/confirm-sign-up`, data, this.getOptions())
  }


  setToken(token: string){
    localStorage.setItem('lb_token', token);
  }
  getToken(): string | null{
    return localStorage.getItem('lb_token');
  }

  closeSession(){
    localStorage.removeItem('lb_token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      const tokenInfo: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return tokenInfo.exp > currentTime;
    } else {
      return false;
    }
  }

}

export interface LoginRq {
  authentication:Authentication
}

export interface LoginRs {
  authenticationResult: AuthenticationResult;
}

export interface Authentication {
  login: string;
  password: string;
}


export interface AuthenticationResult {
  message:       string;
  credentials:   Credentials;
  nextChallenge: string;
}

export interface Credentials {
  accessToken: string;
}


export interface SignupRq {
  authentication: Authentication,
  attributes: {
    name: string,
    lastName: string,
    phoneNumber: string,
    email: string,
  }

}

export interface SignUpRs {
  authSignUpResult: AuthSignUpResult;
}

export interface AuthSignUpResult {
  username:      string;
  message:       string;
  nextChallenge: string;
}

export interface VerifyCodeRq {
  username: string,
  confirmationCode: string
}

export interface VerifyCodeRs {
  message: string;
}

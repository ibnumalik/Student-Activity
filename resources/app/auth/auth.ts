export interface IHttpRegisterResponse {
  data: {
    message: string;
  };
  status: string;
}

export interface IHttpLoginResponse {
  data: {
    token: string;
    message: string;
  };
  status: string;
}

export interface IHttpLogoutResponse {
  status: string;
}

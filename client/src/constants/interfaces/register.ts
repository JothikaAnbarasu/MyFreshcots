export interface IRegister {
  title: string;
  imageURL: string;
  details: JSX.Element[];
  baseURL: string;
}

export interface IApiHeaders {
  method: string;
  redirect: RequestRedirect;
  headers: Headers;
}

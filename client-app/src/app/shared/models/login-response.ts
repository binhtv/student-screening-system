export interface LoginResponse {
  userId: any,
  expiresIn: any;
  token: string,
  role: string,
  message?: string,
}

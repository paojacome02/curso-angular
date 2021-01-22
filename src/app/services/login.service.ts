import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse,LoginRequest } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient){ }

  login(data: LoginRequest){
    return this.http.post<LoginResponse>('https://reqres.in/api/login', data);
  }
}

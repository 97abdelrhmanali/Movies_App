import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Register } from '../Interfaces/register';
import { Login } from '../Interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogIn = new BehaviorSubject(false)
  constructor(private _HttpClient:HttpClient , private _Router:Router) {
    if(localStorage.getItem('token') != null){
      this.isLogIn.next(true)
      try{
        var decode = jwtDecode(localStorage.getItem('token')+"")
        console.log(decode);
      }

      catch(error:any){
        console.log(error);
        if(error.message){
          this.logout()
        }
      }
    }
  }

  logout(){
    this.isLogIn.next(false)
    localStorage.removeItem('token')
    this._Router.navigate(['/login']);
  }

  register(userData:Register):Observable<any>
  {
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup', userData)

  }
  login(userData:Login):Observable<any>
  {
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin', userData)
  }
}

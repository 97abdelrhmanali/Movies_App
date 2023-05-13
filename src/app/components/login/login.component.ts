import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router) {
    if(_AuthService.isLogIn.value == true){
      _Router.navigate(['/home'])
    }
  }
  matched:boolean = false
  loginForm : FormGroup = new FormGroup({
    email:new FormControl(null , [Validators.email , Validators.required]),
    password:new FormControl(null , [Validators.required ,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
  })


  login(){
    console.log(this.loginForm.value);

    if(this.loginForm.status == 'VALID'){
      this._AuthService.login(this.loginForm.value).subscribe({
        next:(req)=>{
          console.log(req);
          if(req.message == 'success'){
            this._AuthService.isLogIn.next(true)
            localStorage.setItem('token',req.token)
            this._Router.navigate(['/home'])
          }
        },

        error:(err)=>{
          alert("incorrect email or password")
        }
      })
    }
  }


}

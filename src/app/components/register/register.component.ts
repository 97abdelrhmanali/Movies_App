import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService , private _Router:Router) {}
  matched:boolean = false
  registerForm : FormGroup = new FormGroup({
    name:new FormControl(null , [Validators.required, Validators.minLength(3) , Validators.maxLength(20) , Validators.pattern(/[A-Z][A-Za-z]{0,}$/)]),
    email:new FormControl(null , [Validators.email , Validators.required]),
    password:new FormControl(null , [Validators.required ,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
    rePassword:new FormControl(null , [Validators.required]),
    phone:new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])
  })


  register(){
    if(this.registerForm.status == 'VALID'){
      this._AuthService.register(this.registerForm.value).subscribe({
        next:(req)=>{
          console.log(req);
          if(req.message == 'success')
            this._Router.navigate(['/login'])
        }
      })
    }
  }

  passwordMatching(){
    console.log(this.registerForm.value.password );
    console.log(this.registerForm.value.rePassword );

    if(this.registerForm.value.password == this.registerForm.value.rePassword)
      this.matched = true;
    else
      this.matched = false;
  }


}

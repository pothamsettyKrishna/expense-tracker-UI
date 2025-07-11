import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, MatButtonModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  router = inject(Router)
  errorMsg = signal('');
  
  signupForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    cpwd: new FormControl('', [Validators.required])
  });


  validatePassword(){
    this.errorMsg.set('Password is not matched.')
  }

  login(){
    this.router.navigate(['login'])
  }

  signUp(){
    console.log(this.signupForm)
  }

}

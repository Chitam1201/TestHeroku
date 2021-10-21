import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm')
  loginForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if (this.loginForm.valid){
      console.log('Invalid data');
      return;

    }
    console.log(this.loginForm.value);

  }

}

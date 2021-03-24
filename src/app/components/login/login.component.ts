import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  login(){
    if (this.loginForm.valid){
      let loginModule=Object.assign({},this.loginForm.value);
      
    }
  }

}

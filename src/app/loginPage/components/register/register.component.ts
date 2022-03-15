import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserRegisterService} from "../../services/userRegister.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: FormGroup
  hide:boolean = true

  constructor(private register:UserRegisterService) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      username: new FormControl('', [Validators.minLength(4), Validators.maxLength(10), Validators.required])
    })
  }


  submit() {
    let data = this.form.value
    this.register.RegisterUser(data).subscribe()
  }
}

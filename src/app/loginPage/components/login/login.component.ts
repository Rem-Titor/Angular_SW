import {Component, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {UserLoginService} from "../../services/userLogin.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  form: FormGroup
  hide: boolean = true

  constructor(private login: UserLoginService) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }






  submit(){
    let data = this.form.value
    console.log("submit",data)
    this.login.loginUser(data).subscribe()
  }


}

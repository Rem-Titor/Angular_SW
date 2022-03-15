import {catchError} from "rxjs/operators";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, throwError} from "rxjs";

export interface UserRegister {
  email:string
  password:string
  username:string
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class UserRegisterService {
  private apiUrl = 'http://localhost:5000/socialweb/users/';

  constructor(private http: HttpClient) {
  }

  RegisterUser(userdata: UserRegister): Observable<UserRegister> {

    let data = {
      user: {
        username: userdata.username,
        email: userdata.email,
        password: userdata.password
      }
    }

    var body = JSON.stringify(data)
    return this.http.post<UserRegister>(this.apiUrl, body, httpOptions)
      .pipe(
        catchError(this.handleLoginError)
      )
  }

  handleLoginError(error: HttpErrorResponse) {
    return throwError(error)
  }
}

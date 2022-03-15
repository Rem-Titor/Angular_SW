import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";

export interface UserLogin {
  email: string;
  password: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class UserLoginService {
  private apiUrl = 'http://localhost:5000/socialweb/users/login/';

  constructor(private http: HttpClient) {
  }

  loginUser(userdata: UserLogin): Observable<UserLogin> {

    let data = {
      user: {
        email: userdata.email,
        password: userdata.password
      }
    }

    var body = JSON.stringify(data)
    return this.http.post<UserLogin>(this.apiUrl, body, httpOptions)
      .pipe(
        catchError(this.handleLoginError)
      )
  }

  handleLoginError(error: HttpErrorResponse) {
    return throwError(error)
  }
}

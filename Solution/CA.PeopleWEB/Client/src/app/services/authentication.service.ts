import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Login} from '../models/login.model';
import {Session} from '../models/session.model';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class AuthenticationService {

  constructor(private http: HttpClient) {}

  private basePath = 'https://localhost:44314/api/users/authenticate/';

  login(login: Login): Observable<Session> {
    return this.http.post<Session>(this.basePath, login);
  }

  logout(): Observable<Boolean> {
    return this.http.post<Boolean>(this.basePath + 'logout', {});
  }
}

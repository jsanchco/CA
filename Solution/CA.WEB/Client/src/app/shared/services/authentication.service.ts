import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { Session } from '../models/session.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../models/user.model';
import { GlobalVariable } from '../../../global';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(login: Login): Observable<Session> {
    const url = GlobalVariable.BASE_API_URL + 'users/authenticate/';
    return this.http.post<Session>(url, login)
    .pipe(map(session => {
      // login successful if there's a jwt token in the response
      if (session && session.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(session.user));
          this.currentUserSubject.next(session.user);
      }

      return session;
    }));
  }

  logout(): Observable<Boolean> {
    const url = GlobalVariable.BASE_API_URL + 'users/logout/';
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    return this.http.post<Boolean>(url + 'logout', {});
  }
}

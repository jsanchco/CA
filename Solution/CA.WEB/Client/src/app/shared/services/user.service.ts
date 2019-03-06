import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';
import { GlobalVariable } from '../../../global';

@Injectable({ providedIn: 'root' })

export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    const url = GlobalVariable.BASE_API_URL + 'users';
    return this.http.get<User[]>(url);
  }
}

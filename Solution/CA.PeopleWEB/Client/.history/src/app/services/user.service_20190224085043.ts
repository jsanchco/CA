import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })

export class UserService {

  private basePath = 'http://localhost:44314/api/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(this.basePath + 'users');
  }
}

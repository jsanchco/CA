import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })

export class UsersService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService) { }

  getAll() {
    const url = this.storageService.getBaseApiUrl() + 'users';
    return this.http.get<User[]>(url);
  }
}

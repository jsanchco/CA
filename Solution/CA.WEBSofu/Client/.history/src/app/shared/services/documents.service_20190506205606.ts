import { Injectable } from '@angular/core';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { StorageService } from './storage.service';
// import { getFileNameFromResponseContentDisposition, saveFile } from '../helpers/file-download'

@Injectable({ providedIn: 'root' })

export class DocumentsService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService) { }

  public getDocument(path: string): Observable<Blob>{
    return this.http.get(path, 
    {
      params: { documentId: '1' },
      responseType: 'blob'
    });
  }  
}

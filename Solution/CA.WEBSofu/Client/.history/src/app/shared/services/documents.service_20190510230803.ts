import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class DocumentsService {

  constructor(
    private http: HttpClient) { }

  public getDocument(path: string): Observable<Blob> {
    return this.http.get(path,
    {
      params: { documentId: '1' },
      responseType: 'blob'
    });
  }

  public getImage(path: string): Observable<Blob> {
    return this.http.get(path,
    {
      params: { documentId: '1' },
      responseType: 'blob'
    });
  }
}

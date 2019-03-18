import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { StorageService } from '../services/storage.service';

@Injectable()

export class JwtInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentSession = this.storageService.getCurrentSession();
    if (currentSession && currentSession.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentSession.token}`
        }
      });
    }

    // return next.handle(request);
    return next.handle(request).pipe(tap(
      (err: any) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            // redirect to the login route
            // or show a modal
          }
        }
      }
    ));
  }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
  //   return next.handle(request).do((event: HttpEvent<any>) => {
  //     if (event instanceof HttpResponse) {
  //       // do stuff with response if you want
  //     }
  //   }, (err: any) => {
  //     if (err instanceof HttpErrorResponse) {
  //       if (err.status === 401) {
  //         // redirect to the login route
  //         // or show a modal
  //       }
  //     }
  //   });
  // }
}

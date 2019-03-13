// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// import { AuthenticationService } from '../services/authentication.service';

// @Injectable()

// export class ErrorInterceptor implements HttpInterceptor {

//   constructor(private authenticationService: AuthenticationService) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(request).pipe(catchError(err => {
//       if (err.status === 401) {
//         // auto logout if 401 response returned from api
//         this.authenticationService.logout();
//         location.reload(true);
//       }

//       const error = err.error.message || err.statusText;
//       return throwError(error);
//     }));
//   }
// }

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse,
         HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/retry'; // don't forget the imports

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .catch((err: HttpErrorResponse) => {

        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
        }

        // ...optionally return a default fallback value so app can continue (pick one)
        // which could be a default value (which has to be a HttpResponse here)
        // return Observable.of(new HttpResponse({body: [{name: "Default value..."}]}));
        // or simply an empty observable
        return '';
      });
  }
}

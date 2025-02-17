import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { LocalStorageService } from "./local-storage.service";
import { User } from "../../models/models";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) {}

  

  private static handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage;
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = { error: error.error.message };
    } else {
      // Server-side errors
      errorMessage = { error: error.message };
    }
    return of(errorMessage);
  }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post(
      'http://www.NonStopIntegration.results-alnet.com',
      {
        body: {
          email,
          password
        }
      }
    ).pipe(
      catchError(AuthenticationService.handleError),
      tap(data => {
        this.localStorage.setItem('user-id', data?.id);
        this.localStorage.setItem('token', data.token);
      })
    );
  }

  registrate(user: User): Observable<any> {
    return this.httpClient.post(      
      'http://www.NonStopIntegration.results-alnet.com',
      user,
    ).pipe(
      catchError(AuthenticationService.handleError),
      tap(data => {
        this.localStorage.setItem('user-id', data?.id);
        this.localStorage.setItem('location', location);
      })
    );
  }


  isAuthenticated(): boolean {
    return !!this.localStorage.getItem('user-id');
  }

  logout(): void {
    this.localStorage.removeItem('user-id');
  }
}

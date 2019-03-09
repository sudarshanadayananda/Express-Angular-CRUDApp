import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment as ENV } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' },
  )
};

@Injectable()
export class UserService {

  CMS_API: string;

  constructor(private http: HttpClient) {

    this.CMS_API = ENV.CMS_API;
   }

  getAllUsers(): Observable<any> {

    return this.http.get(this.CMS_API + 'user/all', httpOptions)
      .pipe(
        catchError(this.handleError('get all users', []))
      );
  }

  addUser(user): Observable<any> {

    return this.http.post(this.CMS_API + 'user', user, httpOptions)
      .pipe(
        catchError(this.handleError('add user', []))
      );
  }

  updateUser(user): Observable<any> {

    return this.http.put(this.CMS_API + 'user', user, httpOptions)
      .pipe(
        catchError(this.handleError('update user', []))
      );
  }

  deleteUser(id): Observable<any> {

    let params = new HttpParams().append('id', id);
    return this.http.delete(this.CMS_API + 'user', { params: params })
      .pipe(
        catchError(this.handleError('delete user', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:5000/api/translate';

  // Method for error handler
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  // Translate the task to another language
  translateTask(task: string, language: string): Observable<string> {
    // Our API endpoint expect an object with text and language properties
    const body = { 'text': task, 'language': language };
    return this.http.post<string>(this.apiUrl, body)
      .pipe(
        catchError(this.handleError)
      );
  }
}

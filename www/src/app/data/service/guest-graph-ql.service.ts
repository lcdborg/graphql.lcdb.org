import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestGraphQLService {

  constructor(private http: HttpClient) { }

  public query(query: string, variables: object = {}, operationName = ''): Observable<any> {
    return this.http.post<any>('http://localhost/graphql/guest', {
      'query': query,
      'variables': variables,
      'operationName': operationName,
    }, {
      headers: new HttpHeaders({
        'accept': 'application/json',
        'content-type': 'application/json',
      })
    });
  }
}

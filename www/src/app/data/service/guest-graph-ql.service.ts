import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestGraphQLService {

  constructor(private http: HttpClient) { }

  public query(query: string, variables: object = {}, operationName = ''): Observable<any> {
    return this.http.post<any>(environment.graphQLServer + '/graphql', {
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

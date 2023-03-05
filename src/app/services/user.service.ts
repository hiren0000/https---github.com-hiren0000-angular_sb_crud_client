import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:9990/api/users';

  constructor(private http: HttpClient) { }

  getUser(Id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${Id}`);
  } 

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add-user`, user);
  }

  updateUser(Id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update-user/${Id}`, value);
  }

  deleteUser(Id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-user/${Id}`, { responseType: 'text' });
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list-users`);
  }
}

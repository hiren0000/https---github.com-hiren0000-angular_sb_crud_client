import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:9990/api/users';

  constructor(private http: HttpClient) { }

  //get signle user by id 
  getUser(Id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${Id}`);
  } 

  //creating new user 
  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add-user`, user);
  }

  //updating existing user
  updateUser(Id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update-user/${Id}`, value);
  }

  //deletting existing user
  deleteUser(Id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-user/${Id}`, { responseType: 'text' });
  }

  //get list of users
  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list-users`);
  }
}

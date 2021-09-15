import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASEURL = 'http://localhost:9090/';
  private ENDPOINTS = {
    USER: 'users',
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(
      `${this.BASEURL + this.ENDPOINTS.USER}`
    );
  }

  getUserbyId(id: any): Observable<IUser> {
    return this.http.get<IUser>(
      `${this.BASEURL + this.ENDPOINTS.USER}/${id}`
    );
  }

  createUser(data: IUser): Observable<IUser> {
    return this.http.post<IUser>(
      `${this.BASEURL + this.ENDPOINTS.USER}`,
      data
    );
  }

  updateUser(id: any, data: IUser): Observable<IUser> {
    return this.http.put<IUser>(
      `${this.BASEURL + this.ENDPOINTS.USER}/${id}`,
      data
    );
  }

  deleteUser(id: any): Observable<IUser> {
    return this.http.delete<IUser>(
      `${this.BASEURL + this.ENDPOINTS.USER}/${id}`
    );
  }
}

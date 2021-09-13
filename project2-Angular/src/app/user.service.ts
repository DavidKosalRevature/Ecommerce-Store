import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/users';
   }

  public findAll(): Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
  }

  public save(user: User){
    return this.http.post<User>(this.userUrl, user);
  }

  public login(user: User){
    return this.http.post<any>(this.userUrl, user);
  }

  public logout(){
    localStorage.clear();
  }

  public loggedIn(): boolean{
    if(localStorage.getItem('token')){
        return true;
    } else{
        return false;
    }
}
}

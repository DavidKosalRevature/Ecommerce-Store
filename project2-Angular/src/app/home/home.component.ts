import { Component, OnInit } from '@angular/core';
import { IUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = '';
  user: any;
  users : IUser = {
    userId: 0,
    firstName: '',
    lastName: '',
    emailId: '',
    username: '',
    address: '',
    password: '',
    type: ''
  }
  

  constructor(private userService: UserService) {
   }

  ngOnInit(): void {
      this.user = localStorage.getItem('user');
      this.users = JSON.parse(this.user);
      
  }

  

}

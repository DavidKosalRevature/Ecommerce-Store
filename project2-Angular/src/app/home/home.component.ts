import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = '';
  user : any;

  constructor(private userService: UserService) {
    this.user = userService.getUsersById(4)
   }

  ngOnInit(): void {
      this.message = '' + this.user;
    
  }

}

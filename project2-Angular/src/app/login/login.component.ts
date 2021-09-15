import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message = '';
  users: any;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private userService: UserService
  ) {
    
   }

  ngOnInit(): void {
  }

  onFormSubmit(data: IUser){
    this.userService.login(data).subscribe(data =>{
      this.users = data;
      console.log(this.users)
      if(this.users != null){
        console.log("valid login");
        this.router.navigate(['/home']);
      } else{
        console.log("invalid login")
      }
    })

  }

  goToHome(user: IUser){
    this.router.navigate(['/login/' + user.username + '/' + user.password])
  }



}

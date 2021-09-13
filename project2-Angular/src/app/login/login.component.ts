import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message = '';
  user: User;
  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private userService: UserService
  ) {
    this.user = new User();
   }

  ngOnInit(): void {
  }

  onFormSubmit(data: any){
    this.userService.login(data).subscribe(response =>{
      this.message = 'Login successful'
      // localStorage.setItem('token', response.token)
      // localStorage.setItem('user', JSON.stringify(response.user))
    })
  }

  goToHome(){
    this.router.navigate(['/home'])
  }



}

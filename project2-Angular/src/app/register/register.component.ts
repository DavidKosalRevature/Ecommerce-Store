import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private userService: UserService
  ) {
    
   }

  ngOnInit(): void {
  }

  onSubmit(user: any){
    this.userService.createUsers(user).subscribe(x => console.log(x));
    window.alert("Registration Successful");
    this.router.navigate(['/home']);
  }
  gotoUserList() {
    this.router.navigate(['/users']);
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(data: any) {
    this.userService.createUser(data).subscribe(a => console.log(a))

  }

}

import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  id: any;
  user: any;

  constructor(private userService: UserService, private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.paramMap.get('id');

   }

  ngOnInit(): void {
    this.userService.getUserbyId(this.id).subscribe(data => {
      this.user = data;
    })
  }

  onSubmit(data: any){
    this.userService.updateUser(this.id, data).subscribe(a => console.log(a))
  }

}

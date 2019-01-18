import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from '../app/models/User'
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: User[];
  currentUser: User;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  isEdit: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getAllUsers().subscribe((res: any) => {

      if (res.message === 'SUCCESS') {
        this.users = res.data;
      }
    });
  }

  onEditClickHandler(user: User) {

    this.isEdit = true;
    this.currentUser = user;
    this.firstName = this.currentUser.firstName;
    this.lastName = this.currentUser.lastName;
    this.age = this.currentUser.age;
    this.email = this.currentUser.email;
  }

  onModalCloseHandler() {

    if (this.isEdit) {

      this.currentUser.firstName = this.firstName;
      this.currentUser.lastName = this.lastName;
      this.currentUser.email = this.email;
      this.currentUser.age = this.age;
      this.isEdit = false;
      this.userService.updateUser(this.currentUser).subscribe((res: any) => {

        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.age = null;
        console.log(JSON.stringify(res, null, 2));
      });
    } else {

      this.currentUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        age: this.age
      }

      this.userService.addUser(this.currentUser).subscribe((res: any) => {
        console.log(JSON.stringify(res, null, 2));
      });
    }
  }

  deleteUserHandler(user) {
    this.userService.deleteUser(user._id).subscribe((res: any) => {
      console.log(JSON.stringify(res, null, 2));
    });
  }
}

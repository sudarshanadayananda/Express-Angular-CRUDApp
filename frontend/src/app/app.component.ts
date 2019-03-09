import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserService } from './services/user.service';
import { User } from '../app/models/User'
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: User[];
  displayedColumns: string[] = ['email', 'first_name', 'last_name', 'age', 'edit', 'delete'];
  dataSource: User[];

  constructor(
    private dialog: MatDialog,
    private userService: UserService) {

      this.getUsers();
    }

  ngOnInit() {}

  getUsers(): void {
    this.userService.getAllUsers()
      .subscribe((res: any) => {

        if (res.message === 'SUCCESS') {
          this.users = res.data;
          this.dataSource = this.users;
        }
      });
  }

  onAddButtonClickHandler(): void {
    this.openModalDialog(null);
  }

  onEditButtonClickHandler(user: User): void {
    this.openModalDialog(user);
  }

  onDeleteButtonClickHandler(user: User): void {
    this.deleteUser(user);
  }

  openModalDialog(user: User): void {
    let dialog = this.dialog.open(AddUserComponent, { data: user });

    dialog.afterClosed().subscribe(results => {
      if (results.data.message === 'OK') {
        this.getUsers();
      }
    });
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user._id)
      .subscribe((res: any) => {
        this.getUsers();
      });
  }
}

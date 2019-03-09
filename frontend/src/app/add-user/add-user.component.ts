import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  DIALOG_CLOSE_MSGS: any = {
    OK: 'OK',
    CANCEL: 'CANCEL'
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) private user: User,
    private userService: UserService,
    private dialogRef: MatDialogRef<any>) {

    if (!this.user) {
      this.user = {
        email: undefined,
        firstName: undefined,
        lastName: undefined,
        age: undefined
      };
    }
  }

  ngOnInit() { }

  onCancelClickHandler(): void {
    this.closeDialog({ message: this.DIALOG_CLOSE_MSGS.CANCEL });
  }

  onSaveClickHandler(): void {
    if (this.user._id) {
      this.updateUser();
    }
    if (!this.user._id) {
      this.addUser();
    }
  }

  closeDialog(data: any): void {
    this.dialogRef.close({ data: data });
  }

  addUser(): void {

    this.userService.addUser(this.user)
      .subscribe((res: any) => {
        this.closeDialog({ message: this.DIALOG_CLOSE_MSGS.OK });
      });
  }

  updateUser(): void {

    this.userService.updateUser(this.user)
      .subscribe((res: any) => {
        this.closeDialog({ message: this.DIALOG_CLOSE_MSGS.OK });
      });
  }
}

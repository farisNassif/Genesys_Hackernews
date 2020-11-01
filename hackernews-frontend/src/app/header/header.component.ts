import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  /* Login placeholder, just flashing a snackbar currently */
  login() {
    this.openSnackBar("Login Placeholder", "Ok")
    
  }

  /* Registration placeholder, just flashing a snackbar currently */
  register() {
    this.openSnackBar("Register Placeholder", "Ok")
  }

  /* Snackbar initializer, popup information message skeleton for the user */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2500,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['reg-login-snackbar']
    });
  } 
}

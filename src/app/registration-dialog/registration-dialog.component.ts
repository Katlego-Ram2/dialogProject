import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { UserDetailsService } from '../user-details.service';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.scss']
})
export class RegistrationDialogComponent {
  
  userDetails: any = {};
  constructor(private dialogRef: MatDialogRef<RegistrationDialogComponent>,private dialog: MatDialog, private userDetailsServce: UserDetailsService,private router: Router) {}

  saveData() {
    const confPass = this.userDetails.confirmPassword;
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = {
      name: this.userDetails.name,
      surname: this.userDetails.surname,
      email: this.userDetails.email,
      phone: this.userDetails.phone,
      password: this.userDetails.password

    };

    const chkEmail = /^\S+@\S+\.\S+$/.test(user.email);
    const existingUser = users.find((userD: any) => userD.email === this.userDetails.email);

    //validation
    if (!user.name || !user.surname || !user.password || !user.phone || !user.email) {
      alert("Empty spaces not allowed");
      return;

    } else if (!isNaN(user.name)) {
      alert("Firstname can not be numbers");
  
      
      return;
    } else if (!isNaN(user.surname)) {
      alert("Lastname can not be numbers");
      return;
    } else if (!chkEmail) {
      alert("invalid email");
      return;
    } else if (isNaN(user.phone) || user.phone.length < 10) {
      alert("invalid cellphone number");
      return;
    } else if (confPass != user.password) {
      alert("passwords must match");
      return;
    }
    else if (existingUser) {
      alert('User already exists. Please log in.');
      this.router.navigate(['/login']);
      return;
    } else {

      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      alert('User registered successfully');
      this.router.navigate(['/login']);
    }
  }
 

  // openRegistrationDialog(): void {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.width = '700px'; // Set the width to your desired pixel value, e.g., '400px'
  //   dialogConfig.height = '300px'; // Set the height to your desired pixel value, e.g., '300px'
    
  //   const dialogRef = this.dialog.open(RegistrationDialogComponent, dialogConfig);

  //   dialogRef.afterClosed().subscribe(result => {
  //     // Handle dialog close if needed
  //   });
  // }
}


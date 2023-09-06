import { Component } from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {
  users: any;
  constructor(private userDetailsService: UserDetailsService,private dialog: MatDialog){}
  ngOnInit(): void {
   
    const data = localStorage.getItem('users');
    if (data) {
      this.users = JSON.parse(data);
    }
  }
  
  removeRow(): void {
    if (this.users.length > 0) {
      this.users.pop();
    }
  }
  // removeRow1(user: any) {
  //   // Remove the selected user from the users array
  //   const index = this.users.indexOf(user);
  //   if (index !== -1) {
  //     this.users.splice(index, 1);
  //   }
  // }


  openRegistrationDialog(): void {
      const dialogRef = this.dialog.open(RegistrationDialogComponent);

   
  }
  openDialog() {
    this.dialog.open(RegisterComponent, {
      
    });}

    
    removeRow1(user: any): void {
     
      const dialogRef = this.dialog.open(RegisterComponent);
  
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
         
          const index = this.users.indexOf(user);
          if (index !== -1) {
            this.users.splice(index, 1);
           
          }
        }
      });
    }
}

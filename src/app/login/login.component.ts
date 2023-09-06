import { Component } from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private userDetails: UserDetailsService, private router: Router) { }


  get userData() {
    return this.userDetails.userData;
  }
  checkCredentials() {

    const email = this.userDetails.userData.email;
    const password = this.userDetails.userData.password;

    const usersData = JSON.parse(localStorage.getItem('users') || '[]');
    const userData = usersData.find((user: { email: string; password: string }) => user.email === email);

    if (userData && userData.password === password) {
      this.router.navigate(['display']);
 
    } else {
   alert('Invalid email or password');
    }
}
}
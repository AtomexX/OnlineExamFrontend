import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedInUser: string;
  constructor(private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  loggedin()
  {
    this.loggedInUser = localStorage.getItem('token');
    return this.loggedInUser;
  }
   
  onLogout()
  {
    localStorage.removeItem('token');
    this.alertify.success('Logged out Successfully');
    this.router.navigate(['/']);

  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: Observable<firebase.User>;
constructor(private authServ: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.authServ.authUser();
  }

  sair() {
    this.authServ.logout().then(() => this.router.navigate(['/']));
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent {

  constructor(private router:Router) { }

  backToLogin(){
    this.router.navigate(['/']);
  }

}

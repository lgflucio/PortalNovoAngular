import { Component } from '@angular/core';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  public loggedUser: any;
  constructor() {
    this.loggedUser = localStorage.getItem('userName');
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}

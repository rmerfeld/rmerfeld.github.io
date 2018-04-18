import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isCollapsed: boolean = true;

  collapse(): void {
    this.isCollapsed = true;
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }


}

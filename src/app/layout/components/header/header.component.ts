import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserPanelComponent } from '../user-panel/user-panel.component';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, UserPanelComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  private isMenuActive: boolean = false;

  constructor(private router: Router) { }

  public menuItems: MenuItem[] = [
    { title: 'Home', route: '/' },
    { title: 'Status', route: '/' },
    { title: 'Info', route: '/' },
    { title: 'Download', route: '/' },
  ]

  onClick() {
    this.router.navigate(['/'])
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
  getMenuActive(): boolean {
    return this.isMenuActive;
  }

}




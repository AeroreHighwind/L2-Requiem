import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
}
@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})

export class UserPanelComponent {
  private isActive: boolean = false;

  @Input() isPanelActive: boolean = this.isActive;



  constructor(private router: Router) { }

  public menuItems: MenuItem[] = [
    { title: 'Profile', route: '/' },
    { title: 'Characters', route: '/' },
    { title: 'Settings', route: '/' },
    { title: 'Log out', route: '/' },
  ]

  onClick() {
    this.router.navigate(['/'])
  }

  checkActive(): boolean {
    return this.isActive;
  }
  toggle(): void {
    this.isActive = !this.isActive;
  }

}

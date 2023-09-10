import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

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

}




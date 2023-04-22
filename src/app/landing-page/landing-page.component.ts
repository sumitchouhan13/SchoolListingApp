import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  constructor(private router: Router) {}
  private isLoggedIn = sessionStorage.getItem('isLoggedIn');

  ngOnInit() {
    if (this.isLoggedIn === null) {
      this.router.navigate(['/']);
      alert('Please Login ');
    }
  }
}

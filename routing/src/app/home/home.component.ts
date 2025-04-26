import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {

  }

  goToProducts() {
    console.log('Trying to update database...')
    setTimeout(() => {
      console.log('Database is updated');
      this.router.navigate(['products']);
    }, 2000)
  }
}

import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FirstComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'services-dependencyInjection';
}

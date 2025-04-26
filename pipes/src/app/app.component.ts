import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InitialsPipe } from './initials.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, InitialsPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Assume these value sare coming from the backend
  amount = 223.4567;
  channelName = "WebTechTalk";
  mark = 0.8945;
  today = new Date();
  name = "Abdul Kalam";
}

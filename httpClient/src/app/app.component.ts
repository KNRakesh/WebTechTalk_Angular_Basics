import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isLoading = false;
  users: any;
  url = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;
    console.log(this.http.get(this.url));
    this.http.get(this.url).subscribe(
      (res) => {
        console.log('success', res);
        setTimeout(() => {
          this.isLoading = false;
          this.users = res;
        }, 3000);
      },
      (err) => {
        console.log('error', err);
      },
      () => {
        console.log('completed');
      }
    );
  }

  goToGithub(url: any) {
    window.open(url, '_blank');
  }
}

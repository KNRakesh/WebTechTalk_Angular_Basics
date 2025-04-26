import { ParentComponent } from './parent/parent.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskParentComponent } from './task-parent/task-parent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParentComponent, TaskParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'input-output-decorators';
}

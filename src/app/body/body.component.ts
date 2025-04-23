import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MainBodyComponent } from '../main-body/main-body.component';

@Component({
  selector: 'app-body',
  imports: [SideNavComponent, MainBodyComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}

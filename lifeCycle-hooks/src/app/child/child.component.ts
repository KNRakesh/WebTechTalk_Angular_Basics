import { FormsModule } from '@angular/forms';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  ViewChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  counter = 0;

  interval: any;

  @Input()
  channelName = '';

  @ContentChild('projectedContent', { static : true } ) projectedContent: any;

  @ViewChild('childContent', { static : true } ) childContent: any;

  constructor() {
    console.log('Child constructor is called');
  }

  ngOnInit(): void {
    console.log('Child OnInit is called');
    console.log('OnInit - ' + this.projectedContent);
    console.log('OnInit - ' + this.childContent);

    // this.interval = setInterval(() => {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter)
    // }, 1000)
  }

  ngOnDestroy(): void {
    console.log('Child OnDestroy is called');
    // clearInterval(this.interval)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('Child OnChanges is called');
    console.log('OnChanges - ' + this.projectedContent);
    console.log('OnChanges - ' + this.childContent);
  }

  ngDoCheck(): void {
    console.log('Child DoCheck is called');
    console.log('DoCheck - ' + this.projectedContent);
    console.log('DoCheck - ' + this.childContent);
  }

  ngAfterContentInit(): void {
    console.log('in after content init');
    console.log('AfterContentInit - ' + this.projectedContent);
    console.log('AfterContentInit - ' + this.childContent);
  }

  ngAfterContentChecked(): void {
    console.log('in after content checked');
    console.log('in after content checked' + this.childContent);
  }

  ngAfterViewInit(): void {
    console.log('in after view init');
    console.log('in after view init' + this.childContent);
  }

  ngAfterViewChecked(): void {
    console.log('in after view checked');
    console.log('in after view checked' + this.childContent);
  }
}

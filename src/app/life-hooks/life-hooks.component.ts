import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-life-hooks',
  imports: [],
  templateUrl: './life-hooks.component.html',
  styleUrl: './life-hooks.component.css'
})
export class LifeHooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy  {

  @Input() getaddress: string = "";

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called:', changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  @ViewChild('viewContent') content!: ElementRef;

  ngAfterViewInit() {
    console.log('ngAfterViewInit called', this.content.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }


}

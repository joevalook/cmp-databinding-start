import { Component, Input, OnInit, OnChanges, ViewEncapsulation, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {
  @Input() element: {type: string, name: string, content: string};
  constructor() {
  console.log('constructor called');
  }
  ngOnInit(): void {
    console.log('ngonit called');

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngonchanges called');
    console.log(changes);
  }

  ngDoCheck() {
    console.log("ngDoCheck called");

  }

  ngAfterContentInit() {
    console.log("AfterContentInit called");

  }
  ngAfterContentChecked() {
    console.log("AfterContentChecked called");

  }
  ngAfterViewInit() {
    console.log("AfterViewInit called");

  }
  ngAfterViewChecked() {
    console.log('AfterViewChecked called');

  }
  ngOnDestroy() {
    console.log("OnDestroy called");

  }
}

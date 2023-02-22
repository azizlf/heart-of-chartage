import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avantage',
  templateUrl: './avantage.component.html',
  styleUrls: ['./avantage.component.css']
})
export class AvantageComponent implements OnInit {
  Navigate(elem: HTMLElement ) {
    elem.scrollIntoView({ behavior: 'smooth' });
    }
  constructor() { }

  ngOnInit(): void {
  }

}

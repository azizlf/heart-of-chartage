import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-accord',
  templateUrl: './accord.component.html',
  styleUrls: ['./accord.component.css']
})
export class AccordComponent implements OnInit {
  pass=""
  log=""
 public  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
  
}

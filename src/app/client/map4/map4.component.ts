import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
@Component({
  selector: 'app-map4',
  templateUrl: './map4.component.html',
  styleUrls: ['./map4.component.css']
})
export class Map4Component implements OnInit {
  constructor(public crud:CrudService) { }

  ngOnInit(): void {
    console.log(this.crud.lng,'aaaa')
  }

  public zoom: number = 8;
  marker:any
  // initial center position for the map
 public  lat: number = 25.13411701823085 ;
  public lng: number = 55.23202961184142;

 
  
}

import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
@Component({
  selector: 'app-map1',
  templateUrl: './map1.component.html',
  styleUrls: ['./map1.component.css']
})
export class Map1Component implements OnInit {

  constructor(public crud:CrudService) { }

  ngOnInit(): void {
    console.log(this.crud.lng,'aaaa')
  }

  public zoom: number = 8;
  marker:any
  // initial center position for the map
 public  lat: number = 24.619185472680048 ;
  public lng: number = 55.3883916685736;

 
  
  

}
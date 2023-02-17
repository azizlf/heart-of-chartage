import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-map3',
  templateUrl: './map3.component.html',
  styleUrls: ['./map3.component.css']
})
export class Map3Component implements OnInit {
  marker:any
  public zoom: number = 8;
  // initial center position for the map
 public  lat: number = 24.619185472680048 ;
  public lng: number = 55.3883916685736;
  constructor(public crud:CrudService) { }

  ngOnInit(): void {
  }
 


  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: any) {
   
    this.crud.lat= $event.coords.lat
    this.crud.lng=$event.coords.lng
    console.log(this.crud.lat,this.crud.lng)
  }
  
  markerDragEnd(m: any, $event: any) {
    console.log('dragEnd', m, $event);
  }
  
  

}

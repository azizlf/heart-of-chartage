import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-carc',
  templateUrl: './carc.component.html',
  styleUrls: ['./carc.component.css']
})
export class CarcComponent implements OnInit {
 

  constructor(public  crud:CrudService) { }

  ngOnInit(): void {

    console.log(this.crud.tabCarc)
  }

}

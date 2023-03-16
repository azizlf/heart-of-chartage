import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css']
})
export class CustomHeaderComponent implements OnInit {

  constructor() { }

  element:any

  searchAllDropList = {
    sale:["Sale","Rent"],
    propertyType:["Property Type","Appartment","Villa","Townhouse","Penthouse","Office space","Shop"],
    minArea:["Min area","300 sqft","500 sqft","700 sqft","800 sqft","1000 sqft"],
    maxArea:["Max area","300 sqft","500 sqft","700 sqft","800 sqft","1000 sqft"]
  }

  formSearch = {
    saleRent:"Sale",
    propertyType:"Property Type",
    minArea:"Min area",
    maxArea:"Max area"
  }

  selectItem(dp:any,key:any,value:any){

    this.formSearch[key] = value

    console.log(value)
    console.log(this.formSearch[key])

    this.openCloseDrop(dp)

  }

  dropOpen = false

  openCloseDrop(drop:any){

    if(this.dropOpen){

      drop.style.display = "none"
      this.dropOpen = false

    }
    else{

      drop.style.display = "block"
      this.dropOpen = true

    }

  }

  openSide(){
    this.element = document.getElementById("sideBar")
    this.element.style.display = "flex"
  }

  closeSide(){
    this.element = document.getElementById("sideBar")
    this.element.style.display = "none"
  }

  navBarScroll:any

  ngOnInit(): void {

    window.addEventListener("scroll",()=>{

      if(window.scrollY > 70){
        this.navBarScroll = document.querySelector(".nav-bar-on-scroll-event")
        this.navBarScroll.style.opacity = "1"
        this.navBarScroll.style.top = "0%"
        this.navBarScroll.style.pointerEvents = "all"
      }else{
        this.navBarScroll.style.opacity = "0"
        this.navBarScroll.style.top = "-100%"
        this.navBarScroll.style.pointerEvents = "none"
      }

    })

}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css']
})
export class CustomHeaderComponent implements OnInit {

  constructor() { }

  element:any

  openSide(){
    console.log(this.element)
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

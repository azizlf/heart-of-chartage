import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-nav-bar',
  templateUrl: './custom-nav-bar.component.html',
  styleUrls: ['./custom-nav-bar.component.css']
})
export class CustomNavBarComponent implements OnInit {

  constructor() { }
  element:any

  navBarScroll:any


  openSide(){
    this.element = document.getElementById("sideBar")
    this.element.style.display = "flex"
  }

  closeSide(){
    this.element = document.getElementById("sideBar")
    this.element.style.display = "none"
  }

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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css']
})
export class CustomHeaderComponent implements OnInit {

  constructor() { }

  element:any

  ngOnInit(): void {



    window.addEventListener("scroll",()=>{

      if(window.scrollY > 0){
        this.element = document.querySelector(".nav-bar-on-scroll-event")
        this.element.style.opacity = "1"
        this.element.style.top = "0%"
        this.element.style.pointerEvents = "all"
      }else{
        this.element.style.opacity = "0"
        this.element.style.top = "-100%"
        this.element.style.pointerEvents = "none"
      }

    })
    this.element = document.querySelector("#opensideBar")
    this.element.addEventListener("click",()=>{
      this.element = document.querySelector("#sideBar")
      this.element.style.display = "flex"

    })
    this.element = document.querySelector("#closesideBar")
    this.element.addEventListener("click",()=>{
      this.element = document.querySelector("#closesideBar")
      this.element.style.display = "none"

    })

      }

}

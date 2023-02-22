import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-box-english',
  templateUrl: './not-box-english.component.html',
  styleUrls: ['./not-box-english.component.css']
})
export class NotBoxEnglishComponent implements OnInit {

  constructor() { }

  notifBoxEnglish:any

  animationNotifArabe(){

    this.notifBoxEnglish = document.getElementById("notifBoxEnglish")

    this.notifBoxEnglish.style.display = "block"

    setTimeout(()=>{
      this.notifBoxEnglish.style.opacity = "0"
      this.notifBoxEnglish.style.right = "-100%"
    },6000)

  }

  ngOnInit(): void {

    setTimeout(()=>{
      this.animationNotifArabe()
    },6000)

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-box-english',
  templateUrl: './not-box-english.component.html',
  styleUrls: ['./not-box-english.component.css']
})
export class NotBoxEnglishComponent implements OnInit {

  constructor() { }

  animationNotifArabe(){

    this.notifBoxArabe = document.getElementById("notifBoxArabe")

    this.notifBoxArabe.style.display = "block"

    setTimeout(()=>{
      this.notifBoxArabe.style.opacity = "0"
      this.notifBoxArabe.style.right = "-100%"
    },6000)

  }

  ngOnInit(): void {

    setTimeout(()=>{
      this.animationNotifArabe()
    },6000)

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-box-arabe',
  templateUrl: './not-box-arabe.component.html',
  styleUrls: ['./not-box-arabe.component.css']
})
export class NotBoxArabeComponent implements OnInit {

  constructor() { }

  notifBoxArabe:any

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

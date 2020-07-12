import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout( ()=> { x.className = x.className.replace("show", ""); }, 3000)
  }

}

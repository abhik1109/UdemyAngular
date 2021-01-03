import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-secretdisplay",
  templateUrl: "./secretdisplay.component.html",
  styleUrls: ["./secretdisplay.component.css"]
})
export class SecretdisplayComponent implements OnInit {
  secretVisible = false;
  paraVisible=false;
  clickLog:string[]=[];
  constructor() {}

  ngOnInit() {}

  onSecretBtnClick() {
    this.secretVisible = !this.secretVisible;
    this.paraVisible=!this.paraVisible;
    this.clickLog.push("Button Clicked at "+ new Date());
  }
}

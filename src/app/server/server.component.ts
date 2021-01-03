import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = "Offline";
  //serverStyle:any = { 'background-color': getColor() };
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline";
  }

  ngOnInit() {}

  getColor() {
    return this.serverStatus === "Online" ? "green" : "red";
  }
}


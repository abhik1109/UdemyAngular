import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  servers = ["TestServer1", "TestServer2"];
  serverName = "";
  serverCreated = false;
  allowServer = false;
  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  ngOnInit() {}
  onCreateServer() {
    console.log("Clicked");
    this.serverCreated = true;
    this.servers.push(this.serverName);
    console.log(this.servers.length);
  }
}

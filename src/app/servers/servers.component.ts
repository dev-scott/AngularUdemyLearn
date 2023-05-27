import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {


  serverName = '';

  serverCreationStatus = "No server was created";

  allowNewServer = false;

  constructor(){

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  onCreateServer(){

    this.serverCreationStatus = "sever was created and name is"+this.serverName;

  }
  onUpdateServer(event:Event){

    console.log(event);

    this.serverName=(<HTMLInputElement>event.target).value;



  }


}

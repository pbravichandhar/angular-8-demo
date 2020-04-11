import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-ravi-home',
  templateUrl: './ravi-home.component.html',
  styleUrls: ['./ravi-home.component.scss']
})
export class RaviHomeComponent implements OnInit {
  parentMessage = "Message from parent";

  messageFromChild:string;
  constructor(private data: CommonService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      console.log("message from service", JSON.stringify(message));
    });
  }
  receiveMessage($event) {
    console.log($event);
    this.messageFromChild = $event;
  }

  send() {
    this.receiveMessage("adsdas");
  }
}

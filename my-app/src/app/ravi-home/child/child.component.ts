import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  messageFromService: any;
  @Input() childMessage: any;
  @Output() messageEvent = new EventEmitter<string>();
  sabari: any = 'ravi';

  constructor(private data: CommonService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.messageFromService = message);
  }
  sendMessage(value) {
    this.messageEvent.emit(value);
    this.data.changeMessage('Hello from Sibling')
  }
}

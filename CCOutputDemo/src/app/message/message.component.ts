import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input("message")
  msg : string = 'Hello Radhe Krishna...!';

  @Output("getFormattedMessage")
  newMessage  = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
   // alert(1);
    this.newMessage.emit("Welcome "+this.msg);
  }

}

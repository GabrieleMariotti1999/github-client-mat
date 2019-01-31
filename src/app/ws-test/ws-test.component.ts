import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketHandlerService } from '../services/socket-handler.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ws-test',
  templateUrl: './ws-test.component.html',
  styleUrls: ['./ws-test.component.css']
})
export class WsTestComponent implements OnInit, OnDestroy {
  private message: string;
  history: Array<string> = new Array<string>();
  private messageSubscription: Subscription;
  constructor(private sockethandlerservice: SocketHandlerService) { }
  ngOnInit() {
    this.messageSubscription = this.sockethandlerservice.messages.subscribe(msg => {
      this.history.push(msg);
    });
  }
  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }
  sendMsg() {
    this.sockethandlerservice.send(this.message);
    this.message = null;
  }
  isOpen(): boolean {
    return this.sockethandlerservice.isOpen();
  }
  disconnect() {
    this.sockethandlerservice.disconnect();
  }
  connect() {
    this.sockethandlerservice.connect();
  }
}

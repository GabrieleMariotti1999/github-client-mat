import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class SocketHandlerService {
  private ws: WebSocket;
  public messages: Subject<any> = new Subject<any>();
  constructor(private notifications: NotificationsService) {
    this.connect();
  }
  connect() {
    this.ws = new WebSocket(environment.ws_url);
    this.ws.onopen = () => {
      console.log('Connection established');
      this.notifications.success('Connection established');
    };
    this.ws.onerror = (err) => {
      console.log('Error ', err);
      this.notifications.error('Error', err);
    };
    this.ws.onclose = (close) => {
      console.log('connection closed');
      this.notifications.warn('Connection closed');
    };
    this.ws.onmessage = (msg: MessageEvent) => {
      console.log('<<= ', msg.data);
      this.messages.next(msg.data);
    };
  }
  send(msg: string) {
    this.ws.send(msg);
    console.log('=>> ', msg);
  }
  isOpen(): boolean {
    return this.ws && this.ws.readyState === WebSocket.OPEN;
  }
  disconnect() {
    this.ws.close();
  }
}

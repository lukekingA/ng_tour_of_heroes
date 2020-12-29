import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../message.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  message = "Haven't loaded them yet"



  constructor(private ms:MessageService) { }

  ngOnInit(): void {
    this.message = this.ms.get()
  }

}

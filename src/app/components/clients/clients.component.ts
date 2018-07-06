import { Component, OnInit } from '@angular/core';

import { ClientsService } from '../../services/clients.service';
import { Client } from '../../services/models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  totalOwed: number;

  constructor(private clientsService: ClientsService) {}

  ngOnInit() {
    this.clientsService.getClients().subscribe(clients => {
      this.clients = clients;
      this.getTotalOwed();
    });
  }

  getTotalOwed() {
    this.totalOwed = this.clients.reduce((total, client) => {
      return client.balance ? (total += parseFloat(client.balance.toString())) : total;
    }, 0);
  }
}

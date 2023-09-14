import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.scss']
})
export class ClientdetailComponent implements OnInit {
  client: any = {};

  constructor(private route: ActivatedRoute, private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.getClientDetail();
  }

  getClientDetail() {
    const clientId = this.route.snapshot.paramMap.get('id');
    if (clientId) {
      this.clientsService.getClientById(+clientId).subscribe((data: any) => {
        this.client = data;
      });
    }
  }
}

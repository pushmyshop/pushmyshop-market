import { Component, OnInit } from '@angular/core';
import { CompagniesService } from '../../../services/compagnies.service';
import { CustomerService } from '../../../services/customer.service';
import { Compagny } from '../../../models/compagny';

@Component({
  selector: 'app-compagnies',
  templateUrl: './compagnies.component.html',
  styleUrls: ['./compagnies.component.css'],
  providers: [CompagniesService, CustomerService]
})
export class CompagniesComponent implements OnInit {

  compagnies: Array<Compagny>;

  constructor(compagniesService: CompagniesService) {
    compagniesService.getAll().subscribe(
      result => {
        this.compagnies = result;
      })
  }

  ngOnInit() {
  }

}

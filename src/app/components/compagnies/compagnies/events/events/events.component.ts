import { Component, OnInit, Input } from '@angular/core';

import { AlertIconAndTypesService } from 'clarity-angular/emphasis/alert/providers/icon-and-types-service';
import {Compagny} from "../../../../../models/compagny";
import {CompagniesService} from "../../../../../services/compagnies.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [AlertIconAndTypesService]
})
export class EventsComponent implements OnInit {

  @Input() compagny: Compagny;
  @Input() compagnies: Array<Compagny>;
  public updateSiteWebMessage: Boolean = false;
  constructor(private compagniesService: CompagniesService) { }

  ngOnInit() {
  }

  deleteCompagny() {
    this.compagniesService.delete(this.compagny).subscribe(reponse => {
      this.compagnies.splice(this.compagnies.indexOf(this.compagny), 1);
    }, error => {
      console.log(error);
    });
  }

  generateSite() {
    this.compagny.isGenerated = true;
    this.compagniesService.generateSite(this.compagny).subscribe(reponse => {
      this.updateSiteWebMessage = true;
    }, error => {
      console.log(error);
    });
  }
}

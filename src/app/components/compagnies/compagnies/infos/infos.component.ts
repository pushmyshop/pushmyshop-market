import { Component, OnInit, Input } from '@angular/core';
import {Compagny} from "../../../../models/compagny";
import {CompagniesService} from "../../../../services/compagnies.service";

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html'
})
export class InfosComponent implements OnInit {

  @Input() compagny: Compagny;

  constructor(private compagniesService: CompagniesService) { }

  ngOnInit() {
  }

  update() {
    this.compagniesService.update(this.compagny).subscribe(compagny => { },
        error => {
          console.log(error);
        }
    );
  }

}

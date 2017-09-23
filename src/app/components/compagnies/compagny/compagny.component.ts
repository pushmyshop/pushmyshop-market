import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Compagny } from '../../../models/compagny';
import { Template } from '../../../models/template';
import { CompagniesService } from '../../../services/compagnies.service'

@Component({
  selector: 'app-compagny',
  templateUrl: './compagny.component.html',
  styleUrls: ['./compagny.component.css']
})
export class CompagnyComponent implements OnInit {

  public compagny: Compagny = new Compagny();
  public templates: Array<Template>;
  @Input() compagnies: Array<Compagny>;


  constructor(private router: Router, private compagniesService: CompagniesService) {
  }



  ngOnInit() {
  }

  new() {
    this.compagniesService.create(this.compagny).subscribe(compagny => {
      this.compagniesService.updateLink(compagny);
      this.compagnies.push(compagny);
    }, error => {
      console.log(error);
    });
  }


}

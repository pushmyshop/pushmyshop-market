import { Component, OnInit } from '@angular/core';

import { Compagny } from '../../../models/compagny';

@Component({
  selector: 'app-compagny',
  templateUrl: './compagny.component.html',
  styleUrls: ['./compagny.component.css']
})
export class CompagnyComponent implements OnInit {

  public compagny: Compagny = new Compagny();

  constructor() { }

  ngOnInit() {
  }

}

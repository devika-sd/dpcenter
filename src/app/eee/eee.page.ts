import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eee',
  templateUrl: './eee.page.html',
  styleUrls: ['./eee.page.scss'],
})
export class EEEPage implements OnInit {

  subcategory=[
    'Lab view Projects',
    'MATLAB POWER Electronics',
    'MATLAB POWER Systems',
    'PLC/SCADA Projects'
]
  constructor() { }

  ngOnInit() {
  }

}

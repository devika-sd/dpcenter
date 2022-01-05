import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diploma-mech',
  templateUrl: './diploma-mech.component.html',
  styleUrls: ['./diploma-mech.component.scss'],
})
export class DiplomaMechComponent implements OnInit {

  subcategory=['Fabrication Projects','Composite Projects','Design Projects','welding Projects',
'EDM & WEDM Projects','CNC Projects','Robotics Based Projects','Optimazation Projects','TOOL & DIE/JIG & Fixture Based Projects',
'Thermal & Refrigeration Based Projects']

  constructor() { }

  ngOnInit() {}
  projectList(){
    console.log("Projects List");
  }

}

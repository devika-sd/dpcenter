import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-be-mech',
  templateUrl: './be-mech.component.html',
  styleUrls: ['./be-mech.component.scss'],
})
export class BeMechComponent implements OnInit {

 subcategory=['Fabrication Projects','Composite Projects','Design Projects','welding Projects',
'EDM & WEDM Projects','CNC Projects','Robotics Based Projects','Optimazation Projects','TOOL & DIE/JIG & Fixture Based Projects','Thermal & Refrigeration Based Projects']
  constructor(private router:Router) { }

  ngOnInit() {}

  projectList(){
    this.router.navigate(['/mechanical/projectList']);
  }
}

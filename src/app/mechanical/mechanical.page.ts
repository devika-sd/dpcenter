import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mechanical',
  templateUrl: './mechanical.page.html',
  styleUrls: ['./mechanical.page.scss'],
})
export class MechanicalPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  beproject(){
    this.router.navigate(['/mechanical/beProject']);
  }
  meproject(){
    this.router.navigate(['/mechanical/meProject']);
  }
  diplomaproject(){
    this.router.navigate(['/mechanical/diplomaProject']);
  }
  miniproject(){
    this.router.navigate(['/mechanical/miniProject']);
  }

}

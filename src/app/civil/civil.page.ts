import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-civil',
  templateUrl: './civil.page.html',
  styleUrls: ['./civil.page.scss'],
})
export class CivilPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  beproject(){
    this.router.navigate(['/civil/beProject']);
  }
  meproject(){
    this.router.navigate(['/civil/meProject']);
  }
  diplomaproject(){
    this.router.navigate(['/civil/diplomaProject']);
  }
  matlabproject(){
    this.router.navigate(['/civil/matlabProject']);
  }

}

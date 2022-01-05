import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router:Router) {}

  mechroute(){
    console.log("Its Mech categories");
    this.router.navigate(['/mechanical']);
  }
  civilroute(){
    this.router.navigate(['/civil']);
  }
  eeeroute(){
    this.router.navigate(['/eee']);
  }
  eceroute(){
    this.router.navigate(['/ece']);
  }
  cseroute(){
    this.router.navigate(['/cse']);
  }
  managementroute(){
    this.router.navigate(['/management']);
  }
}

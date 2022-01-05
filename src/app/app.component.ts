import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Project', url: '/home', icon: 'document' },
    { title: 'Contact', url: '/contact', icon: 'call' },
    { title: 'About Us', url: '/about', icon: 'person-circle' }
  ];
  constructor() {}
}

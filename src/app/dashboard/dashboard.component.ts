import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('vertical-layout');
    body.classList.add('vertical-menu-modern');
    body.classList.add('2-column');
    body.classList.add('navbar-floating');
    body.classList.add('footer-static');
    body.classList.add('menu-collapsed');
    body.classList.remove('2-column');
    body.classList.remove('blank-page');
    body.classList.remove('bg-full-screen-image');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('vertical-layout');
    body.classList.add('vertical-menu-modern');
    body.classList.add('1-column');
    body.classList.add('navbar-floating');
    body.classList.add('footer-static');
    body.classList.add('bg-full-screen-image');
    body.classList.add('menu-collapsed');
    body.classList.add('blank-page');
    body.classList.remove('2-column');
  }

}

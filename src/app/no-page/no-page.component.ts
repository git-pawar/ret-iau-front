import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-page',
  templateUrl: './no-page.component.html',
  styleUrls: ['./no-page.component.css']
})
export class NoPageComponent implements OnInit {

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
  }

}

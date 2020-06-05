import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('vertical-layout');
    body.classList.add('vertical-menu-modern');
    body.classList.add('2-column');
    body.classList.add('navbar-floating');
    body.classList.add('footer-static');
    body.classList.add('menu-collapsed');
  }

}

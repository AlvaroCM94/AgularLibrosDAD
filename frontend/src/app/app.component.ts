import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  ngOnInit(): void {}
  title = 'LibrosAngular';

  urlCompleta = window.location.href;
  urlSplit = this.urlCompleta.split("/");
  urlActual = this.urlSplit[this.urlSplit.length - 1];

}

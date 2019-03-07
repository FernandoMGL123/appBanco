import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menu: any;

  constructor(
    private router: Router,
    private loginservis: LoginService) { }

  ngOnInit() {

    this.menu = this.loginservis.menu;

  }

  salir() {
    this.loginservis.logout();
  }

  verSidebar() {
    $("#wrapper").toggleClass("toggled");
  }

}

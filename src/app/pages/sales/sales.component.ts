import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '@components/navbar/navbar.component';
import {ButtonComponent} from '@components/button/button.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

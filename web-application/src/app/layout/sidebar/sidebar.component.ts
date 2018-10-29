import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { lowerCase } from 'lodash';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  items: any = ['Admin', 'Dashboard'];
  admin: any = ['User-setting'];
  selectedItem: any;
  clicked = false;
  constructor(private router:Router) { }
  @Output() onMenuSelect = new EventEmitter<boolean>();
  ngOnInit() {
  }

  handleMenu() {
    this.clicked = !this.clicked;
    this.onMenuSelect.emit(this.clicked);
  }

  handleNavigate(item) {
    this.selectedItem = item;
    item = lowerCase(item);
    this.router.navigate([`/${item}`])
  }

}

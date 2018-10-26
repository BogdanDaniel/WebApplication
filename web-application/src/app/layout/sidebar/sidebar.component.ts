import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  items: any = ['Admin', 'User'];
  clicked = false;
  constructor() { }
  @Output() onMenuSelect = new EventEmitter<boolean>();
  ngOnInit() {
  }

  handleMenu() {
    this.clicked = !this.clicked;
    this.onMenuSelect.emit(this.clicked);
  }

}

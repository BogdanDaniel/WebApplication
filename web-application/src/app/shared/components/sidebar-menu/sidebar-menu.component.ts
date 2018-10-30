import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  @Input() subMenuDetails;
  admin: any = ['User-setting'];
  items: any;
  clicked = false;
  constructor() { }

  ngOnInit() {
  }

  handleItems() {
    console.log(this.subMenuDetails, "subMenuDetails");
   

    console.log(this.items, "items");
  }

  handleSubMenuSelect(event) {
    console.log(event, "EVENT");
  }

}

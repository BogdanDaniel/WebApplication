import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { lowerCase } from 'lodash';
import { BehaviorSubject } from 'rxjs';

interface SubMenu {
  clicked: boolean;
  item: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  items: any = ['Admin', 'Dashboard'];
  item: any[];
  showSubMenu = new BehaviorSubject<any>(false);
  clicked = false;
  clickedSubMenu = false;
  subMenuDetails: SubMenu;
  constructor(private router:Router) { }
  @Output() onMenuSelect = new EventEmitter<boolean>();

  ngOnInit() {
    this.subMenuDetails = {'clicked': null, 'item': null};
  }

  handleMenu() {
    this.clicked = !this.clicked;
    this.onMenuSelect.emit(this.clicked);
  }

  handleNavigate(item) {
    item = lowerCase(item);
    this.clickedSubMenu = !this.clickedSubMenu;
   if(this.items == 'admin') 
this.item.push(this.items[0]) ;
  }

}

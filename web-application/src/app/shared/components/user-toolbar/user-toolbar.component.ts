import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrls: ['./user-toolbar.component.scss']
})
export class UserToolbarComponent implements OnInit {
  profileOptions: any;
  constructor() {
  this.profileOptions = [
    {name: 'Profile'},
    {name: 'Settings'},
    {name: 'Logout'}
    ];
   }

  ngOnInit() {
  }

}

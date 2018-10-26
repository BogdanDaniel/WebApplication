import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showMenu = new BehaviorSubject<any>(false);

  constructor(private router: Router) {
    this.router.navigate(['dashboard']);
   }

  ngOnInit() {
  }

  handleMenuSelect(event) {
    this.showMenu.next(event);
  }

}

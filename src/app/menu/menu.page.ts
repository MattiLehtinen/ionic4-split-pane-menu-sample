import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage {
  pages: {
    title: string;
    url: string;
  }[] = [
    {
      title: 'Tab 1',
      url: '/tab1',
    },
    {
      title: 'Tab 2',
      url: '/tab2',
    },
    {
      title: 'Tab 3',
      url: '/tab3',
    },
  ];

  selectedPath: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }


}

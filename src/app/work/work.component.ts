import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  currentYear: number;

  constructor(private _location: Location) {
    this.currentYear = new Date().getFullYear();
  }

  @HostListener('window:scroll', ['$event'])

  ngOnInit(): void {
  }

  onWindowScroll() {
    console.log("I hear ya")
    let element = document.querySelector('.top') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('topScrolled');
    } else {
      element.classList.remove('topScrolled');
    }
  }

  backClicked() {
    this._location.back();
  }
}


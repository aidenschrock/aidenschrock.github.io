import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  currentYear: number;
  work: string;
  constructor(private _location: Location) {
    this.currentYear = new Date().getFullYear();
    this.work = "Recolude"
  }



  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
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

  navigateWork() {
    return "allrecipes"
  }
}


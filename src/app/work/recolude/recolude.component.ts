import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recolude',
  templateUrl: './recolude.component.html',
  styleUrls: ['./recolude.component.scss']
})
export class RecoludeComponent implements OnInit {

  constructor(private _location: Location) { }

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
}

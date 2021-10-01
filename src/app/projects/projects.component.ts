import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-work',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor(private _location: Location) {
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

}


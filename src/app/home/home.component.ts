import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { ViewportScroller } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ContactService } from '../contact.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  contactForm: FormGroup;
  currentYear: number;

  public currentActive = 0;
  public homeOffset: number = 0;
  public aboutOffset: number = 0;
  public workOffset: number = 0;
  public contactOffset: number = 0;

  @ViewChild('header') homeElement!: ElementRef;
  @ViewChild('about') aboutElement!: ElementRef;
  @ViewChild('work') workElement!: ElementRef;
  @ViewChild('contact') contactElement!: ElementRef;

  constructor(
    private viewportScroller: ViewportScroller,
    private builder: FormBuilder,
    private contact: ContactService,
    private _snackBar: MatSnackBar
  ) {
    this.currentYear = new Date().getFullYear();
    this.contactForm = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Comment: new FormControl('', [Validators.required]),
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.top') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('topScrolled');
    } else {
      element.classList.remove('topScrolled');
    }
    this.checkOffsetTop();
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  onSubmit(contactForm: FormGroup) {
    console.log(contactForm);
    this.contact.PostMessage(contactForm).subscribe(
      (response) => {
        this._snackBar.open('Message sent!', 'close');
        console.log(response);
      },
      (error) => {
        this._snackBar.open('Message failed to send.', 'close');
        console.warn(error.responseText);
        console.log({ error });
      }
    );
  }

  ngAfterViewInit() {
    this.homeOffset = this.homeElement.nativeElement.offsetTop;
    this.aboutOffset = this.aboutElement.nativeElement.offsetTop - 5;
    this.workOffset = this.workElement.nativeElement.offsetTop - 5;
    this.contactOffset = this.contactElement.nativeElement.offsetTop;
  }

  checkOffsetTop() {
    if (window.pageYOffset >= 0 && window.pageYOffset < this.aboutOffset) {
      this.currentActive = 1;
    } else if (
      window.pageYOffset >= this.aboutOffset &&
      window.pageYOffset < this.workOffset
    ) {
      this.currentActive = 2;
    } else if (
      window.pageYOffset >= this.workOffset &&
      window.pageYOffset < this.contactOffset
    ) {
      this.currentActive = 3;
    } else if (window.pageYOffset >= this.contactOffset) {
      this.currentActive = 4;
    } else {
      this.currentActive = 0;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  contactForm: FormGroup
  currentYear: number;
  constructor(private viewportScroller: ViewportScroller, private builder: FormBuilder, private contact: ContactService, private _snackBar: MatSnackBar) {
    this.currentYear = new Date().getFullYear();
    this.contactForm = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Comment: new FormControl('', [Validators.required])
    })
  }



  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  onSubmit(contactForm: FormGroup) {
    console.log(contactForm)
    this.contact.PostMessage(contactForm)
      .subscribe(response => {
        this._snackBar.open('Message sent!', 'close');
        console.log(response)
      }, error => {
        this._snackBar.open('Message failed to send.', 'close');
        console.warn(error.responseText)
        console.log({ error })
      })
  }


}

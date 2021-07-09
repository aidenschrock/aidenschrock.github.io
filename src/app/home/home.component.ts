import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  contactForm: FormGroup
  currentYear: number;
  constructor(private viewportScroller: ViewportScroller, private builder: FormBuilder, private contact: ContactService) {
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
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}

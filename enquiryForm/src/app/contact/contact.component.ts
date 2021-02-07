import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnquiryService } from '../services/enquiry.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm=this.fb.group(
    {
      name: ["", [Validators.required,Validators.pattern("^[a-zA-Z ]{2,30}$")]],
    email:["",[Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    subject:["",[Validators.required]],
    message: ["", [Validators.required]]
    }
  );

  constructor(private router:Router, private fb: FormBuilder, private enquiry:EnquiryService) { }

  ngOnInit(): void {
  }
  contactDetail(){
    if (this. contactForm.valid == false) {
      alert("invalid form")
    }
    else {
      const name = this.contactForm.value.name
      const email = this.contactForm.value.email
      const subject = this.contactForm.value.subject
      const message = this.contactForm.value.message
      const userinfo = this.enquiry.add(name, email, subject, message);
      if (userinfo == 1) {
        alert("submit the details successfully");

        this.router.navigateByUrl("/listing");
      }

    }

  }

}


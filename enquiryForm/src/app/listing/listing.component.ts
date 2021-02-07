import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {


    listing:{name:string,email:string,subject:string,message:string}[]=[];
    
    constructor(private enquiry:EnquiryService) {
      this.listing=enquiry.getenquires();
     }
  
    ngOnInit(): void {
    }
  
  }

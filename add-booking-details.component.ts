import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingdetailsService } from '../bookingdetails.service';
import { BookingDetails } from '../bookingdetails/bookingdetails';

@Component({
  selector: 'app-add-booking-details',
  templateUrl: './add-booking-details.component.html',
  styleUrls: ['./add-booking-details.component.css']
})
export class AddBookingDetailsComponent implements OnInit {

  /*booking: BookingDetails = new BookingDetails();
  submitted = false;
  constructor(private bookingService: BookingdetailsService, private router: Router) { }

  ngOnInit(): void {
  }

  newBooking(): void {
    this.submitted = false;
    this.booking = new BookingDetails();
  }

  save() {
    this.bookingService.addBookingDetails(this.booking)
    .subscribe(data => console.log(data),
    error => console.log(error));
    this.booking = new BookingDetails();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/bookingdetails']);
  }*/
  bookingdetailsForm: FormGroup;
  errorMessage: string;


  constructor(private fb:FormBuilder,private bookingdetailsService:BookingdetailsService , private router:Router) { }


  ngOnInit(): void {
    this.bookingdetailsForm=this.fb.group({
      // testResultid:['',Validators.required],
      booked_from:['',Validators.required],
      booked_to:['',Validators.required],
      no_of_adults:['',Validators.required],
      no_of_children:['',Validators.required],
      amount:['',Validators.required],
      


    })
  }
  get booking_id() {
    return this.bookingdetailsForm.get('booking_id');
  }
  regBookingDetails() {
    this.bookingdetailsService.addBookingDetails(this.bookingdetailsForm.value).subscribe(res => {
      this.router.navigate(['bookingdetails/all']);
    }, (error: string) => {
      this.errorMessage = error;
    }
    )

  }


}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingdetailsService } from '../bookingdetails.service';
import { BookingDetails } from '../bookingdetails/bookingdetails';

@Component({
  selector: 'app-updatebookingdetails',
  templateUrl: './updatebookingdetails.component.html',
  styleUrls: ['./updatebookingdetails.component.css']
})
export class UpdatebookingdetailsComponent implements OnInit {

  /*submitted: false;
  booking_id: number;
  booking: BookingDetails;

  constructor(private route: ActivatedRoute, private router: Router,
    private bookingService: BookingdetailsService) { }

  ngOnInit() {
    this.booking = new BookingDetails();

    this.booking_id = this.route.snapshot.params['booking_id'];

    this.bookingService.getBooking(this.booking_id)
    .subscribe(data => {
      console.log(data);
      this.booking = data;
      },
      error => console.log(error));
  }

  updateBookingDetails() {
    this.bookingService.updateBookingDetails(this.booking)
      .subscribe(data => console.log(data), error => console.log(error));
    this.booking = new BookingDetails();
    this.gotoList();
  }

  onSubmit() {
    this.updateBookingDetails();
  }

  gotoList() {
    this.router.navigate(['/bookingdetails']);
  }*/

  booking_id: number;
  booking:BookingDetails;

  constructor(private actRouter:ActivatedRoute,private bookingdetailsService:BookingdetailsService,private router:Router) { }


  ngOnInit(): void {
    this.booking=new BookingDetails();
    this.booking_id=this.actRouter.snapshot.params['booking_id'];
    this.bookingdetailsService.showBookingDetails(this.booking_id).subscribe(data =>{
      this.booking=data;
    });
  }
  updateData(){
    this.booking.booking_id = this.booking_id;
    this.bookingdetailsService.updateBookingDetails(this.booking).subscribe(res =>{
      this.router.navigate(['/bookingdetails/all'])
    });
  }
  
}



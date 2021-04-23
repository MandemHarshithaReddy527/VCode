import { Component, OnInit } from '@angular/core';
import { BookingdetailsService } from '../bookingdetails.service';
import { BookingDetails } from '../bookingdetails/bookingdetails';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-details-list',
  templateUrl: './booking-details-list.component.html',
  styleUrls: ['./booking-details-list.component.css']
})
export class BookingDetailsListComponent implements OnInit {

  /*bookingdetails: Observable<BookingDetails[]>;
  constructor(private bookingService: BookingdetailsService, private router: Router) {}
  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.bookingdetails = this.bookingService.getBookingsList();
  }

  removeBookingDetails(booking_id: number) {
    this.bookingService.removeBookingDetails(booking_id)
    .subscribe(
      data=> {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  updateBooking(booking_id: number) {
    this.router.navigate(['updateBooking', booking_id])
    .then(() => {
      window.location.reload();
    });
  }*/
  
  bookingdetails:any[];

  

  constructor(private bookingService:BookingdetailsService) { }


  ngOnInit(): void {
    this.bookingService.showAllBookingDetails().subscribe((data)=>{
      this.bookingdetails=data;
    })
  }
  removeBookingDetails(booking_id:number){
    this.bookingService.deleteBookingDetails(booking_id).subscribe((data:BookingDetails[]) =>{
      this.bookingdetails= data;
      console.log(data);
    })
    
  }
}



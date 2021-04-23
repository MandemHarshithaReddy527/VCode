import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingDetailsListComponent } from './booking-details-list/booking-details-list.component';
import { AddBookingDetailsComponent } from './add-booking-details/add-booking-details.component';
import { UpdatebookingdetailsComponent } from './updatebookingdetails/updatebookingdetails.component';
import { HotelComponent } from './hotel/hotel.component';


@NgModule({
  declarations: [
    AppComponent,
    BookingdetailsComponent,
    BookingDetailsListComponent,
    AddBookingDetailsComponent,
    UpdatebookingdetailsComponent,
    HotelComponent


   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

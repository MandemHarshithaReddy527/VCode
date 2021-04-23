
import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { AddBookingDetailsComponent } from './add-booking-details/add-booking-details.component';
import { BookingDetailsListComponent } from './booking-details-list/booking-details-list.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { UpdatebookingdetailsComponent } from './updatebookingdetails/updatebookingdetails.component';

  
const routes: Routes = [  
  //{ path: '', redirectTo: 'booking', pathMatch: 'full' },  
  //{ path: 'booking-details-list', component:  BookingDetailsListComponent },  
  //{ path: 'add-booking-details', component: AddBookingDetailsComponent }, 
  //{ path: 'updatebookingdetails', component: UpdatebookingdetailsComponent } 
  {path:'bookingdetails', component: BookingdetailsComponent ,
    children: [
      { path: 'add', component: AddBookingDetailsComponent },
      { path: 'all', component: BookingDetailsListComponent },
      { path: 'bookingdetails/:booking_id', component: UpdatebookingdetailsComponent }]
  },
];  
  
@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }
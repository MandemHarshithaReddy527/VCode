import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { BookingDetails } from './bookingdetails/bookingdetails';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingdetailsService {

  /*private baseUrl = 'http://localhost:8182/bookingdetails';
  constructor(private http: HttpClient) { }
  getBookingsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  addBookingDetails(booking: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, booking);
  }
  removeBookingDetails(booking_id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteBooking/${booking_id}`);
  }
  updateBookingDetails(booking: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/bookingdetails`, booking);
  }
  getBooking(bookingId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/searchBooking/${bookingId}`);
  }*/
  private url = "http://localhost:8182";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  showBookingDetails(booking_id : number){
    return this.httpClient.get<BookingDetails>(this.url+'/bookingdetails/booking_id/'+booking_id.toString()).pipe(
      catchError(this.handleError)
    );
  }
  

  constructor(private httpClient: HttpClient) { }
  // getTest-ResultById(testResultid)):Observable<Test-Result>{
  //   return this.httpClient.get<Test-Result>(this.url + '/testresult/'+ id).
  //   pipe(
  //     catchError(this.handleError)
  //   );
  // }
  addBookingDetails(bookingdetails: any): Observable < any > {
    console.log(bookingdetails);
    return this.httpClient.post < BookingDetails > (this.url + '/bookingdetails/add', JSON.stringify(bookingdetails), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }
  updateBookingDetails(bookingdetails: any): Observable < any > {
    return this.httpClient.put <BookingDetails > (this.url + '/bookingdetails/bookingdetails', JSON.stringify(bookingdetails), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }
  showAllBookingDetails(): Observable < BookingDetails[] > {
    return this.httpClient.get < BookingDetails[]> (this.url + '/bookingdetails/all')
      .pipe(
        catchError(this.handleError)
      );
  }
  
  deleteBookingDetails(booking_id:number): Observable <BookingDetails[] > {
    return this.httpClient.delete<BookingDetails[]> (this.url + '/bookingdetails/deleteBooking/'+booking_id.toString())
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(bookingdetailsResponse: HttpErrorResponse) {
    if (bookingdetailsResponse.error instanceof ErrorEvent) {
      console.log("Client Side Error =" + bookingdetailsResponse.error.message);
      console.log("Status Code=" + bookingdetailsResponse.status);
    }
    else {
      console.log("Server Side Error =" + bookingdetailsResponse.error.message);
      console.log("Status Code=" + bookingdetailsResponse.status);
    }
    return throwError(bookingdetailsResponse.error.message);
  }
}

  



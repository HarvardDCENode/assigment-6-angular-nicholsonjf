import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TripComponent } from './trip/trip.component';
import { TripsComponent } from './trips/trips.component';

const routes: Routes = [
  { path: '', redirectTo: '/trips', pathMatch: 'full'},
  { path: 'trips', component: TripsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TripComponent,
    TripsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

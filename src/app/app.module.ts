import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star.component';
import { StarFillComponent } from './starfill.component';
import { RatingComponent } from "./rating.component";


@NgModule({
  declarations: [
    AppComponent, StarComponent, StarFillComponent, RatingComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

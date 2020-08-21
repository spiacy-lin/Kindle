import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star.component';
import { StarFillComponent } from './starfill.component';
import { RatingComponent } from "./rating.component";
import { ProductComponent} from './product.component';
import { ProductsComponent} from './products.component';
import { TruncatePipe } from './truncate.pipe';


@NgModule({
  declarations: [
    AppComponent, ProductComponent, StarComponent, StarFillComponent, RatingComponent, ProductsComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

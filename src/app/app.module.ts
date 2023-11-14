import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipePipe } from './date-pipe.pipe';
import { StringreversePipe } from './stringreverse.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DatePipePipe, StringreversePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DatePipePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

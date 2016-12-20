import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2RestAppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WidgetsComponent } from './widgets/widgets.component';

import { WidgetsService } from './shared/widgets.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WidgetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2RestAppRoutingModule
  ],
  providers: [
    WidgetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

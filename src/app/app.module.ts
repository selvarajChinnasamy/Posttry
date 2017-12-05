import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from'./data.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routes,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

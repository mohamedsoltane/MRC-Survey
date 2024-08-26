import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CongratsComponent } from './congrats/congrats.component';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { RatingComponent } from './rating/rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer'
import {DataTablesModule} from 'angular-datatables';
import { RedirectComponent } from './redirect/redirect.component'


@NgModule({
  declarations: [
    RatingComponent,
    RedirectComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule,
    NgxExtendedPdfViewerModule,
    DataTablesModule,
    CongratsComponent
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
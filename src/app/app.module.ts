import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { MydataService } from '../services/mydata.service';
import { FooterComponent } from './footer/footer.component';
import { PlacesGallaryComponent } from './places-gallary/places-gallary.component';
import { PlacesServiceService } from '../services/places-service.service';
import { EmptygalleryComponent } from './emptygallery/emptygallery.component';
import { CanactivateguardService } from '../services/canactivateguard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanDeactivateGuardService } from '../services/can-deactivate-guard.service';
import { PlacetypefilterPipe } from './pipe/placetypefilter.pipe';
import { ContactusComponent } from './contactus/contactus.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdateComponent,
    CustomdirectiveDirective,
    FooterComponent,
    PlacesGallaryComponent,
    EmptygalleryComponent,
    PlacetypefilterPipe,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MydataService,PlacesServiceService,CanactivateguardService, CanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

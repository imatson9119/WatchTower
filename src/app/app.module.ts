import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatInputModule} from '@angular/material/input';
import { AirQualityComponent } from './air-quality/air-quality.component';
import { FormsModule } from '@angular/forms'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AutomcompleteComponent } from './automcomplete/automcomplete.component';
import { PrecipitationComponent } from './precipitation/precipitation.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { MapComponent } from './map/map.component';
import { TotalPrecipitationComponent } from './total-precipitation/total-precipitation.component';
import { HumidityComponent } from './humidity/humidity.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AirQualityComponent,
    AutomcompleteComponent,
    PrecipitationComponent,
    TemperatureComponent,
    MapComponent,
    TotalPrecipitationComponent,
    HumidityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    NgxChartsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

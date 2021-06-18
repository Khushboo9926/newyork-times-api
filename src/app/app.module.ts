import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { SearchResultComponent } from './search-result/search-result.component';
import { WorldComponent } from './world/world.component';
import { ArtComponent } from './art/art.component';
import { HomeComponent } from './home/home.component';
import { ScienceComponent } from './science/science.component';
import { UsComponent } from './us/us.component';
import { ArtcardComponent } from './artcard/artcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    CardComponent,
    SearchResultComponent,
    WorldComponent,
    ArtComponent,
    HomeComponent,
    ScienceComponent,
    UsComponent,
    ArtcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

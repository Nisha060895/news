import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { CardComponent } from 'src/components/card/card.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HomeComponent } from 'src/components/home/home.component';
import { MainLayoutComponent } from 'src/components/main-layout/main-layout.component';
import { SectionComponent } from 'src/components/section/section.component';
import { HomeService } from 'src/services/home.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    HomeComponent,
    SectionComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

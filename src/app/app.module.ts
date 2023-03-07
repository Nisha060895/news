import { ErrorHandleComponent } from './../components/error-handle/error-handle.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { CardComponent } from 'src/components/card/card.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HomeComponent } from 'src/components/home/home.component';
import { MainLayoutComponent } from 'src/components/main-layout/main-layout.component';
import { SectionComponent } from 'src/components/section/section.component';
import { HomeService } from 'src/services/home.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorInterceptor } from 'src/services/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    HomeComponent,
    SectionComponent,
    CardComponent,
    ErrorHandleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HomeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }

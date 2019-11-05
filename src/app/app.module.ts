import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { NewsComponent } from './pages/news/news.component';
import { PostComponent } from './pages/post/post.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UserCabinetComponent } from './pages/user-cabinet/user-cabinet.component';
import { PopupComponent } from './shared/popup/popup.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { LogInSignInFormComponent } from './shared/log-in-sign-in-form/log-in-sign-in-form.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ApiService } from "./services/api.service";
import { LoaderService } from "./services/loader.service";
import  { ModalModule } from "ngx-bootstrap";
import {LoaderInterceptor} from "./services/loader.interceptor";

export function init_app() {
  return () => {
    // todo loading photo utl = https://jsonplaceholder.typicode.com/albums/1/photos
    // alert('halt and catch fire'); // halt our app before press 'OK'
    console.log( 'after app init');
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NewsComponent,
    PostComponent,
    AboutComponent,
    AdminDashboardComponent,
    UserCabinetComponent,
    PopupComponent,
    LoaderComponent,
    LogInSignInFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  entryComponents: [LoaderComponent],
  providers: [ApiService, LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})

export class AppModule {

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CoverComponent } from './components/cover/cover.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BlogSummaryComponent } from './components/blog-summary/blog-summary.component';
import { AboutSummaryComponent } from './components/about-summary/about-summary.component';
import { QuickDonateComponent } from './components/quick-donate/quick-donate.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { translocoLoader } from './transloco.loader';
import { TranslocoModule, TRANSLOCO_CONFIG, TranslocoConfig } from '@ngneat/transloco';
import { AboutComponent } from './components/about/about.component';
import { ProjectsSummaryComponent } from './components/projects-summary/projects-summary.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { BlogComponent } from './components/blog/blog.component';
import { TransparencyComponent } from './components/transparency/transparency.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    CallToActionComponent,
    ProjectsComponent,
    BlogSummaryComponent,
    AboutSummaryComponent,
    QuickDonateComponent,
    NewsletterComponent,
    AboutComponent,
    ProjectsSummaryComponent,
    HomeComponent,
    ShopComponent,
    BlogComponent,
    TransparencyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoModule
  ],
  providers: [{
      provide: TRANSLOCO_CONFIG,
      useValue: {
        listenToLangChange: false,
        defaultLang: 'es',
        fallbackLang: 'en',
        prodMode: environment.production,
        scopeStrategy: 'shared'
      } as TranslocoConfig
    },
    translocoLoader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

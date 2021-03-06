import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { CoverComponent } from "./components/cover/cover.component";
import { CallToActionComponent } from "./components/call-to-action/call-to-action.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { BlogSummaryComponent } from "./components/blog-summary/blog-summary.component";
import { AboutSummaryComponent } from "./components/about-summary/about-summary.component";
import { QuickDonateComponent } from "./components/quick-donate/quick-donate.component";
import { NewsletterComponent } from "./components/newsletter/newsletter.component";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "../environments/environment";
import { translocoLoader } from "./transloco.loader";
import {
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TranslocoConfig,
} from "@ngneat/transloco";
import { AboutComponent } from "./components/about/about.component";
import { ProjectsSummaryComponent } from "./components/projects-summary/projects-summary.component";
import { HomeComponent } from "./components/home/home.component";
import { ShopComponent } from "./components/shop/shop.component";
import { BlogComponent } from "./components/blog/blog.component";
import { TransparencyComponent } from "./components/transparency/transparency.component";
import { SummarizeTextPipe } from "./pipes/summarize-text.pipe";
import { ProjectSingleComponent } from "./components/project-single/project-single.component";
import { PriceRangeComponent } from "./components/shop/price-range/price-range.component";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { BlogSingleComponent } from './components/blog-single/blog-single.component';

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
    TransparencyComponent,
    SummarizeTextPipe,
    ProjectSingleComponent,
    PriceRangeComponent,
    BlogSingleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoModule,
  ],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: {
        listenToLangChange: false,
        defaultLang: "es",
        fallbackLang: "en",
        prodMode: environment.production,
      } as TranslocoConfig,
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    translocoLoader,
    SummarizeTextPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

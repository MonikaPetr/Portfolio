import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatToolbarModule, MatIconModule, MatProgressBarModule } from '@angular/material';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    RoundProgressModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

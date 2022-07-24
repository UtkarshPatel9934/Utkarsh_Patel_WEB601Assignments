import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ApplyBorderPipePipe } from './pipes/apply-border-pipe.pipe';
import { HighlightImportantDataDirective } from './directive/highlight-important-data.directive';


// importing the app-router.module file
import { AppRoutingModule } from './app-routing.module';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentSearchComponent } from './content-search/content-search.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { InvalidRouteComponentComponent } from './invalid-route-component/invalid-route-component.component';


import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { ChangeContentComponent } from './change-content/change-content.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    FilterPipePipe,
    ApplyBorderPipePipe,
    HighlightImportantDataDirective,
    ContentDetailComponent,
    ContentSearchComponent,
    NavbarComponentComponent,
    InvalidRouteComponentComponent,
    ChangeContentComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatDividerModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
      delay: 1000,
    }),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

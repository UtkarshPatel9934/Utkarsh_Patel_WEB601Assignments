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
@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    FilterPipePipe,
    ApplyBorderPipePipe,
    HighlightImportantDataDirective,
    ContentDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

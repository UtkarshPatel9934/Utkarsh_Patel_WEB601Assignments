import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeContentComponent } from './change-content/change-content.component';

// added the import statement for the Content Detail Component
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentSearchComponent } from './content-search/content-search.component';
import { InvalidRouteComponentComponent } from './invalid-route-component/invalid-route-component.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full"
  },
  {
    path: "list",
    component: ContentListComponent,
  },
  {
    path: "detail/:id",
    component: ContentDetailComponent
  },
  {
    path: "search",
    component: ContentSearchComponent
  },
  {
    path: "addContent",
    component: ChangeContentComponent
  },
  {
    path: "updateContent/:id",
    component: ChangeContentComponent
  },
  {
    path: "**",
    component: InvalidRouteComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

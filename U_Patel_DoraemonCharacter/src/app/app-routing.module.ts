import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// added the import statement for the Content Detail Component
import { ContentDetailComponent } from './content-detail/content-detail.component';

const routes: Routes = [
  {
    path: "content/:id",
    component: ContentDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksHomeComponent} from "./books-home/books-home.component";
import {BooksEditComponent} from "./books-edit/books-edit.component";
import {BooksCreateComponent} from "./books-create/books-create.component";
import {BooksDetailsComponent} from "./books-details/books-details.component";
import {BooksDeleteComponent} from "./books-delete/books-delete.component";

const routes: Routes = [{
  path: '',
  component: BooksHomeComponent
},
  {
    path: 'edit/:id',
    component: BooksEditComponent
  },
  {
    path: 'create',
    component: BooksCreateComponent
  },
  {
    path: 'details/:id',
    component: BooksDetailsComponent
  },
  {
    path: 'delete/:id',
    component: BooksDeleteComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}

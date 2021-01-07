import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComponent} from './book/create/create.component';
import {ListComponent} from './book/list/list.component';
import {EditComponent} from './book/edit/edit.component';
import {DetailComponent} from './book/detail/detail.component';

const routes: Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'list', component: ListComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'detail/:id', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

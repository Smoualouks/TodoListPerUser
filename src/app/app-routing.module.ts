import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { TodoDetailsComponent } from "./components/todo-details/todo-details.component";
import { TodoComponent } from "./components/todo/todo.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'todos',
    component: TodoComponent,
  },

  {
        path: 'details',
        component: TodoDetailsComponent,
   },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule {}

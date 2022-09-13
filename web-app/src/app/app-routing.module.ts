import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskCreateComponent } from "./components/task/task-create/task-create.component";
import { TaskDeleteComponent } from "./components/task/task-delete/task-delete.component";
import { TaskUpdateComponent } from "./components/task/task-update/task-update.component";
import { HomeComponent } from "./views/home/home.component";
import { TaskCrudComponent } from "./views/tasks-crud/tasks-crud.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "tasks",
    component: TaskCrudComponent,
  },
  {
    path: "tasks/create",
    component: TaskCreateComponent,
  },
  {
    path: "tasks/update/:id",
    component: TaskUpdateComponent,
  },
  {
    path: "tasks/delete/:id",
    component: TaskDeleteComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

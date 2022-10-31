import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FollowupCreateComponent } from "./components/followup/followup-create/followup-create.component";
import { FollowupGetAllComponent } from "./components/followup/followup-get-all/followup-get-all.component";
import { FollowupGetOneComponent } from "./components/followup/followup-get-one/followup-get-one.component";
import { RoleCreateComponent } from "./components/role/role-create/role-create.component";
import { RoleDeleteComponent } from "./components/role/role-delete/role-delete.component";
import { RoleReadAllComponent } from "./components/role/role-read-all/role-read-all.component";
import { RoleReadOneComponent } from "./components/role/role-read-one/role-read-one.component";
import { RoleUpdateComponent } from "./components/role/role-update/role-update.component";
import { TaskCreateComponent } from "./components/task/task-create/task-create.component";
import { TaskReadAllComponent } from "./components/task/task-readAll/task-readAll.component";
import { TaskReadOneComponent } from "./components/task/task-readOne/task-readOne.component";
import { UserCreateComponent } from "./components/user/user-create/user-create.component";
import { UserDeleteComponent } from "./components/user/user-delete/user-delete.component";
import { UserLoginComponent } from "./components/user/user-login/user-login.component";
import { UserReadAllComponent } from "./components/user/user-read-all/user-read-all.component";
import { UserReadOneComponent } from "./components/user/user-read-one/user-read-one.component";
import { UserUpdateComponent } from "./components/user/user-update/user-update.component";
import { HomeComponent } from "./views/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: ":token/tasks",
    component: TaskReadAllComponent,
  },
  {
    path: ":token/tasks/create",
    component: TaskCreateComponent,
  },
  {
    path: ":token/tasks/:idTask",
    component: TaskReadOneComponent,
  },
  {
    path: ":token/roles",
    component: RoleReadAllComponent,
  },
  {
    path: ":token/roles/:id",
    component: RoleReadOneComponent,
  },
  {
    path: ":token/roles/update/:id",
    component: RoleUpdateComponent,
  },
  {
    path: ":token/roles/delete/:id",
    component: RoleDeleteComponent,
  },
  {
    path: ":token/roles/create",
    component: RoleCreateComponent,
  },
  {
    path: ":token/users",
    component: UserReadAllComponent,
  },
  {
    path: ":token/users/create",
    component: UserCreateComponent,
  },
  {
    path: ":token/users/delete/:id",
    component: UserDeleteComponent,
  },
  {
    path: ":token/users/:id",
    component: UserLoginComponent,
  },
  {
    path: ":token/users/update/:id",
    component: UserUpdateComponent,
  },
  {
    path: "login",
    component: UserLoginComponent,
  },
  {
    path: ":token/followups/:id",
    component: FollowupGetAllComponent,
  },
  {
    path: ":token/followups/read/:id",
    component: FollowupGetOneComponent,
  },
  {
    path: ":token/followups/:id/create",
    component: FollowupCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

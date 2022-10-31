import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list"
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HomeComponent } from "./views/home/home.component";
import { TaskCreateComponent } from "./components/task/task-create/task-create.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { TaskReadAllComponent } from "./components/task/task-readAll/task-readAll.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TaskReadOneComponent } from "./components/task/task-readOne/task-readOne.component";
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserReadOneComponent } from './components/user/user-read-one/user-read-one.component';
import { UserReadAllComponent } from './components/user/user-read-all/user-read-all.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { RoleCreateComponent } from './components/role/role-create/role-create.component';
import { RoleReadOneComponent } from './components/role/role-read-one/role-read-one.component';
import { RoleReadAllComponent } from './components/role/role-read-all/role-read-all.component';
import { RoleDeleteComponent } from './components/role/role-delete/role-delete.component';
import { RoleUpdateComponent } from './components/role/role-update/role-update.component';
import { FollowupCreateComponent } from './components/followup/followup-create/followup-create.component';
import { FollowupGetOneComponent } from './components/followup/followup-get-one/followup-get-one.component';
import { FollowupGetAllComponent } from './components/followup/followup-get-all/followup-get-all.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TaskCreateComponent,
    TaskReadAllComponent,
    TaskReadOneComponent,
    UserCreateComponent,
    UserReadOneComponent,
    UserReadAllComponent,
    UserDeleteComponent,
    UserUpdateComponent,
    RoleCreateComponent,
    RoleReadOneComponent,
    RoleReadAllComponent,
    RoleDeleteComponent,
    RoleUpdateComponent,
    FollowupCreateComponent,
    FollowupGetOneComponent,
    FollowupGetAllComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatGridListModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt_BR" }],
  bootstrap: [AppComponent],
})
export class AppModule {}

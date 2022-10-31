import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable,map,catchError } from 'rxjs';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:3027";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-sucess"],
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

  login(loginData:UserModel): Observable<UserModel> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<UserModel>(url,loginData).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  create(token: string,task: UserModel): Observable<any> {
    const url = `${this.baseUrl}/${token}/users/create`;
    return this.http.post<any>(url, task).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(token: string): Observable<any> {
    const url = `${this.baseUrl}/${token}/users`
    return this.http.get<any>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(token: string,id: string): Observable<any> {
    const url = `${this.baseUrl}/${token}/users/${id}`;
    return this.http.get<any>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(token: string,task: UserModel): Observable<any> {
    const url = `${this.baseUrl}/${token}/users/update/${task.id}`;
    return this.http.put<any>(url, task).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(token:string,id: string): Observable<any> {
    const url = `${this.baseUrl}/${token}/users/delete/${id}`;
    return this.http.delete<any>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
}

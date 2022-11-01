import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable,map,catchError } from 'rxjs';
import { RoleModel } from './role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

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

  create(token: string,roles: RoleModel): Observable<any> {
    const url = `${this.baseUrl}/${token}/roles/create`;
    return this.http.post<any>(url, roles).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(token: string): Observable<any> {
    const url = `${this.baseUrl}/${token}/roles`
    return this.http.get<any>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(token: string,id: string): Observable<any> {
    const url = `${this.baseUrl}/${token}/roles/${id}`;
    return this.http.get<any>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(token: string,roles: RoleModel,role_id:number): Observable<any> {
    const url = `${this.baseUrl}/${token}/roles/update/${role_id}`;
    return this.http.put<any>(url, roles).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(token:string,id: string): Observable<any> {
    const url = `${this.baseUrl}/${token}/roles/delete/${id}`;
    return this.http.delete<any>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
}

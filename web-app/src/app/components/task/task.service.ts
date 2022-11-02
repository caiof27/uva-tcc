import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, EMPTY, map, Observable } from "rxjs";
import { TaskModel } from "./task.model";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  baseUrl = "http://localhost:3027";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false, duration:number = 3000): void {
    this.snackBar.open(msg, "X", {
      duration: duration,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-sucess"],
    });
  }
  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

  create(token: string,task: TaskModel): Observable<any> {
    const url = `${this.baseUrl}/${token}/tasks/create`;
    return this.http.post<any>(url, task).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(token: string): Observable<any> {
    const url = `${this.baseUrl}/${token}/tasks`
    return this.http.get<any>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(token: string,id: string): Observable<any> {
    const url = `${this.baseUrl}/${token}/tasks/${id}`;
    return this.http.get<any>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(token: string,task: TaskModel): Observable<any> {
    const url = `${this.baseUrl}/${token}/tasks/update/${task.id}`;
    return this.http.put<any>(url, task).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  

}

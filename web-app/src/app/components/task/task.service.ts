import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, EMPTY, map, Observable } from "rxjs";
import { ITask } from "./task.model";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  baseUrl = "http://localhost:3000/tasks";

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

  create(task: ITask): Observable<ITask> {
    const url = `${this.baseUrl}/create`;
    return this.http.post<ITask>(url, task).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<ITask> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ITask>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(task: ITask): Observable<ITask> {
    const url = `${this.baseUrl}/update/${task.id}`;
    return this.http.put<ITask>(url, task).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<ITask> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete<ITask>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
}

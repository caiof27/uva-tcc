import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, EMPTY, map, Observable } from "rxjs";
import { FollowUpModel } from "./followup.model";

@Injectable({
  providedIn: 'root'
})
export class FollowupService {

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

  create(token: string,followup: FollowUpModel,task_id:number): Observable<any> {
    const url = `${this.baseUrl}/${token}/followups/create/${task_id}`;
    return this.http.post<any>(url, followup).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(token: string,task_id:string): Observable<any> {
    const url = `${this.baseUrl}/${token}/followups/${task_id}`;
    return this.http.get<any>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(token: string,followUp_id: string): Observable<any> {
    const url = `${this.baseUrl}/${token}/followups/read/${followUp_id}`;
    return this.http.get<any>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
}

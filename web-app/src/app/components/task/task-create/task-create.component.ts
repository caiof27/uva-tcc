import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TaskModel } from "../task.model";
import { TaskService } from "../task.service";

@Component({
  selector: "app-task-create",
  templateUrl: "./task-create.component.html",
  styleUrls: ["./task-create.component.css"],
})
export class TaskCreateComponent implements OnInit {

  token: string = this.router.url.split("/")[1];

  task:any = {
    title: "",
    description: ""
  };

  return_url:string = `/${this.token}/tasks`; 
  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
  }

  createTask(): void {
    this.taskService.create(this.token,this.task).subscribe(() => {
      this.taskService.showMessage("Chamado Criado");
      this.router.navigate([this.return_url]);
    });
  }

  cancel(): void {
    this.router.navigate([this.return_url]);
  }
}

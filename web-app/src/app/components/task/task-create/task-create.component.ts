import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ITask } from "../task.model";
import { TaskService } from "../task.service";

@Component({
  selector: "app-task-create",
  templateUrl: "./task-create.component.html",
  styleUrls: ["./task-create.component.css"],
})
export class TaskCreateComponent implements OnInit {
  task: ITask = {
    title: "",
    description: "",
    status: "",
    createdBy: 2,
  };
  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {}

  createTask(): void {
    this.taskService.create(this.task).subscribe(() => {
      this.taskService.showMessage("Chamado Criado");
      this.router.navigate(["/tasks"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/tasks"]);
  }
}

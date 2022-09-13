import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ITask } from "../task.model";
import { TaskService } from "../task.service";

@Component({
  selector: "app-task-delete",
  templateUrl: "./task-delete.component.html",
  styleUrls: ["./task-delete.component.css"],
})
export class TaskDeleteComponent implements OnInit {
  task!: ITask;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.taskService.readById(`${id}`).subscribe((task) => {
      this.task = task;
    });
  }

  deleteTask(): void {
    this.taskService.delete(`${this.task.id}`).subscribe(() => {
      this.taskService.showMessage("Chamado excluido com sucesso");
      this.router.navigate(["/task"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/task"]);
  }
}

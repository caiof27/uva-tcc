import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ITask } from "../task.model";
import { TaskService } from "../task.service";

@Component({
  selector: "app-task-update",
  templateUrl: "./task-update.component.html",
  styleUrls: ["./task-update.component.css"],
})
export class TaskUpdateComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  task!: ITask;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id)
      this.taskService.readById(id).subscribe((task) => {
        this.task = task;
      });
  }

  updateTask(): void {
    this.taskService.update(this.task).subscribe(() => {
      this.taskService.showMessage("Chamado atualizado com sucesso");
      this.router.navigate(["/tasks"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/tasks"]);
  }
}

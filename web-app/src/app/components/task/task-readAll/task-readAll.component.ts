import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModel } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-all-read',
  templateUrl: './task-readAll.component.html',
  styleUrls: ['./task-readAll.component.css']
})
export class TaskReadAllComponent implements OnInit {

  tasks: TaskModel[] = [];
  displayedColumns = ['id','title','priority','status','assignTo','createdBy','action'];
  token: any = this.route.snapshot.paramMap.get("token");

  constructor(private router: Router,private taskService: TaskService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.taskService.read(this.token).subscribe(tasks=>{
      this.tasks = tasks.task
      this.token = tasks.token
    })
  }

  navigateToTaskCreate(): void {
    const url = `/${this.token}/tasks/create`
    this.router.navigate([url]);
  }

}

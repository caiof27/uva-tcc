import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskModel } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-all-read',
  templateUrl: './task-readAll.component.html',
  styleUrls: ['./task-readAll.component.css']
})
export class TaskReadAllComponent implements OnInit {

  tasks: TaskModel[] = [];
  token!: string;
  displayedColumns = ['id','title','priority','status','assignTo','createdBy','action']

  constructor(private router: Router,private taskService: TaskService) { }

  ngOnInit(): void {
    
    this.taskService.read(this.decodeUrl(this.router.url)).subscribe(tasks=>{
      this.tasks = tasks.task
      this.token = tasks.token
    })
  }

  decodeUrl(url:string): string{
    return url.split("/")[1]
  }

  navigateToTaskCreate(): void {
    const url = `/${this.token}/tasks/create`
    this.router.navigate([url]);
  }

}

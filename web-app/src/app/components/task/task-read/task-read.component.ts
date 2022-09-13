import { Component, OnInit } from '@angular/core';
import { ITask } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-read',
  templateUrl: './task-read.component.html',
  styleUrls: ['./task-read.component.css']
})
export class TaskReadComponent implements OnInit {

  tasks: ITask[] = [];
  displayedColumns = ['id','title','priority','status','assignTo','createdBy','action']

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.read().subscribe(tasks=>{
      this.tasks = tasks
      console.log(tasks)
    })
  }

}

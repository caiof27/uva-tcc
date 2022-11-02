import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../task/task.service';
import { FollowUpModel } from '../followup.model';
import { FollowupService } from '../followup.service';

@Component({
  selector: 'app-followup-create',
  templateUrl: './followup-create.component.html',
  styleUrls: ['./followup-create.component.css']
})
export class FollowupCreateComponent implements OnInit {

  id:any = this.route.snapshot.paramMap.get("id");
  token:any = this.route.snapshot.paramMap.get("token");

  followUp: any = {
    description: "",
    task_id: this.id
  };

  task_name!:string;

  constructor(private followUpService: FollowupService, private router: Router,private route: ActivatedRoute,private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.readById(this.token,this.id).subscribe(task=>{
      this.task_name = `ID: ${task.task[0].id} - Titulo: ${task.task[0].title}`
    })
  }

  createFollowUp(): void {
    this.followUpService.create(this.token,this.followUp,this.id).subscribe(followups => {
      this.token = followups.token;
      this.followUpService.showMessage("Acompanhamento Criado");
      this.router.navigate(["/"+this.token+"/followups/"+this.id]);
    });
  }

  back():void{
    this.router.navigate(["/"+this.token+"/followups/"+this.id]);
  }

}

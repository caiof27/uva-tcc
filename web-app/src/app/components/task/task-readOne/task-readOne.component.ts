import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FollowupService } from '../../followup/followup.service';
import { TaskModel } from '../task.model';
import { TaskService } from '../task.service';


export interface Tile {
  cols: number;
  label: string;
  value: any;
}

@Component({
  selector: 'app-task-one-read',
  templateUrl: './task-readOne.component.html',
  styleUrls: [ './task-readOne.component.css']
})
export class TaskReadOneComponent implements OnInit {

  task!: TaskModel;
  tiles!: Tile[];

  token: any = this.route.snapshot.paramMap.get("token");
  current_task!:number;
  hasTechnicalAcess: boolean = false;
  return_url:string = ""; 


  constructor(
    private taskService: TaskService,
    private followUpService: FollowupService,
    private router: Router,
    private route: ActivatedRoute
    ) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("idTask");
    if (id){
      this.taskService.readById(this.token,id).subscribe(task => {
        this.task = task.task[0];
        this.tiles = [
          {label:"Prioridade: ", value:this.task.priority, cols:6},
          {label:"Status: ", value:this.task.status_name, cols:6},
          {label:"Finalizado em: ", value: this.task.finishedAt, cols:4},
          {label:"Criado em: ", value: this.task.createdAt, cols:4},
          {label:"Atualizado em: ", value: this.task.updatedAt, cols:4},
          {label:"Criado Por: ", value: this.task.createdBy_name, cols:6},
          {label:"Atribuido à: ", value: this.task.assignTo_name, cols:6},
          {label:"Descrição: ", value:this.task.description, cols:12},      
        ]
        this.token = task.token;
        const {role_id} = this.parseJwt(this.token)
        if(role_id == 1 || role_id == 2){
          this.hasTechnicalAcess = true;
        }
        this.current_task = task.task.id;
        this.return_url = `/${this.token}/tasks/${this.task.id}`;
      });
    }
  }

  back(): void {
    this.router.navigate(["/"+this.token+"/tasks"]);
  }

  assignToMe():void{
    const {id} = this.parseJwt(this.token)
    this.task.assignTo = id;
    this.taskService.update(this.token,this.task).subscribe(() => {
      this.taskService.showMessage("Chamado Atribuido");
      window.location.reload()
    });
  }

  statusTask(status_id:number):void{

    if(this.task.assignTo == null){
      return this.taskService.showMessage("O Chamado precisa ser atribuido antes de atualizar o seu status",true,10000);
    }
    if(status_id == 3 && this.task.priority == null){
      return this.taskService.showMessage("O Chamado precisa ter uma priodade antes de ser finalizado",true,10000);
    }
    this.task.status = status_id;
    if(status_id == 3){
      this.task.finishedAt = new Date();
    }
    this.taskService.update(this.token,this.task).subscribe(() => {
      if(status_id == 4){
        this.taskService.showMessage("Chamado cancelado");
      }else{
        this.taskService.showMessage("Chamado Atualizado");
      }
      window.location.reload()
    });
  }

  priorityTask(priority:string):void{
    this.task.priority = priority;
    this.taskService.update(this.token,this.task).subscribe(() => {
      this.taskService.showMessage("Chamado Atualizado");
      window.location.reload()
    });
  }

  parseJwt(token: string) {
    if (!token) {
      return;
    }

    const base64Url = token.split(".")[1];

    const base64 = base64Url.replace("-", "+").replace("_", "/");

    return JSON.parse(window.atob(base64));
  }

  followUp():void{
    if(this.task.id){
      this.followUpService.read(this.token,this.task.id.toString()).subscribe(()=>{
        this.router.navigate(["/"+this.token+"/followups/"+this.task.id]);
      })
    }
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleModel } from '../role.model';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-update',
  templateUrl: './role-update.component.html',
  styleUrls: ['./role-update.component.css']
})
export class RoleUpdateComponent implements OnInit {

  token:any = this.route.snapshot.paramMap.get("token");
  id:any = this.route.snapshot.paramMap.get("id");

  roles:any ={
    role:"",
    dependency:""
  }

  options:RoleModel[] = [];

  selectedDependency!:number;

  constructor(private roleService: RoleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.roleService.readById(this.token,this.id).subscribe(roles=>{
      this.token = roles.token;
      this.roles = roles.role[0];
      this.selectedDependency = roles.role[0].id;

    })
    this.roleService.read(this.token).subscribe(roles=>{
      this.token = roles.token;
      for(const iterator of roles.role){
        if(iterator.id != this.roles.id){
          this.options.push(iterator)
        }
      }
    })
  }

  updateRole():void{
    this.roles.dependency = this.selectedDependency;
    this.roleService.update(this.token,this.roles,this.id).subscribe(roles =>{
      this.token = roles.token;
      this.roleService.showMessage("Cargo Atualizado");
      this.router.navigate(["/"+this.token+"/roles/read/"+this.id])
    })
  }

  back():void{
    this.router.navigate(["/"+this.token+"/roles/read/"+this.id])
  }

  selectDependency(event:any):void{
    this.selectedDependency = parseInt((event.target as HTMLSelectElement).value);
  }

}

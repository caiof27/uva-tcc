import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleModel } from '../role.model';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {

  token:any = this.route.snapshot.paramMap.get("token");

  options:RoleModel[] = [];

  selectedDependency!:number;

  roles:any ={
    role:"",
    dependency:null
  }

  constructor(private roleService: RoleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.roleService.read(this.token).subscribe(roles=>{
      this.token = roles.token;
      this.options = roles.role;
    })
  }

  createRole():void{
    this.roles.dependency = this.selectedDependency;
    this.roleService.create(this.token,this.roles).subscribe(roles =>{
      this.token = roles.token;
      this.roleService.showMessage("Usuario Criado");
      this.router.navigate(["/"+this.token+"/roles"])
    })
  }

  selectDependency(event:any):void{
    this.selectedDependency = parseInt((event.target as HTMLSelectElement).value);
  }

  back():void{
    this.router.navigate(["/"+this.token+"/roles"]);
  }

}

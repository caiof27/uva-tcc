import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private roleService: RoleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.roleService.readById(this.token,this.id).subscribe(roles=>{
      this.token = roles.token;
      this.roles.role = roles.role.role;
      this.roles.dependency = roles.role.dependency;
    })
  }

  updateRole():void{
    this.roleService.update(this.token,this.roles,this.id).subscribe(roles =>{
      this.token = roles.token;
      this.roleService.showMessage("Cargo Atualizado");
      this.router.navigate(["/"+this.token+"/roles/read/"+this.id])
    })
  }

  back():void{
    this.router.navigate(["/"+this.token+"/roles/read/"+this.id])
  }

}

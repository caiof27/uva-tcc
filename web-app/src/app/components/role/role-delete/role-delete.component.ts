import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-delete',
  templateUrl: './role-delete.component.html',
  styleUrls: ['./role-delete.component.css']
})
export class RoleDeleteComponent implements OnInit {

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
      this.roles = roles.role[0];
    })
  }


  deleteRole():void{
    this.roleService.delete(this.token,this.id).subscribe(users =>{
      this.token = users.token;
      this.roleService.showMessage("Cargo Excluido com Sucesso")
      this.router.navigate(["/"+this.token+"/roles"]);
    })
  }

  back():void{
    this.router.navigate(["/"+this.token+"/roles"]);
  }

}

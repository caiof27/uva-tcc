import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-read-one',
  templateUrl: './role-read-one.component.html',
  styleUrls: ['./role-read-one.component.css']
})
export class RoleReadOneComponent implements OnInit {

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

  editRole():void{
    this.router.navigate(["/"+this.token+"/roles/update/"+this.id])
  }

  back():void{
    this.router.navigate(["/"+this.token+"/roles"]);
  }

}

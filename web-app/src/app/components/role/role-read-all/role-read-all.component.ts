import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleModel } from '../role.model';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-read-all',
  templateUrl: './role-read-all.component.html',
  styleUrls: ['./role-read-all.component.css']
})
export class RoleReadAllComponent implements OnInit {

  roles: RoleModel[] = [];

  token:any = this.route.snapshot.paramMap.get("token");
  displayedColumns = ['id','role','dependency','action']


  constructor(private roleService: RoleService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.roleService.read(this.token).subscribe(roles=>{
      this.token = roles.token;
      this.roles = roles.role;
    })
  }

  navigateToRoleCreate():void{
    this.router.navigate(["/"+this.token+"/roles/create"]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleModel } from '../../role/role.model';
import { RoleService } from '../../role/role.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  token:any = this.route.snapshot.paramMap.get("token");

  users:any ={
    name:"",
    username:"",
    password:"",
    role_id:null
  }

  options:RoleModel[] = [];

  selectedDependency!:number;


  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute,private roleService: RoleService) { }

  ngOnInit(): void {
    this.roleService.read(this.token).subscribe(roles=>{
      this.token = roles.token;
      this.options = roles.role;
    })
  }

  createUser():void{
    this.users.role_id = this.selectedDependency;
    this.userService.create(this.token,this.users).subscribe(users =>{
      this.token = users.token;
      this.userService.showMessage("Usuario Criado");
      this.router.navigate(["/"+this.token+"/users"])
    })
  }

  back():void{
    this.router.navigate(["/"+this.token+"/users"]);
  }

  selectDependency(event:any):void{
    this.selectedDependency = parseInt((event.target as HTMLSelectElement).value);
  }

}

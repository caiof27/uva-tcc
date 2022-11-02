import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleModel } from '../../role/role.model';
import { RoleService } from '../../role/role.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  token:any = this.route.snapshot.paramMap.get("token");
  id:any = this.route.snapshot.paramMap.get("id");


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
    this.userService.readById(this.token,this.id).subscribe(users =>{
      this.token = users.token;
      this.users = users.user[0];
    })
    this.roleService.read(this.token).subscribe(roles=>{
      this.token = roles.token;
      this.options = roles.role;
      for(const iterator of roles.role){
        if(iterator.id == this.users.role_id){
            this.selectedDependency = iterator.id;
        }
      }
    })

  }

  atualizarUser():void{
    this.users.role_id = this.selectedDependency;
    this.userService.update(this.token,this.users,this.id).subscribe(users =>{
      this.token = users.token;
      this.userService.showMessage("Usuario Atualizado")
      this.router.navigate(["/"+this.token+"/users/"+this.id]);
    });
  }

  back():void{
    this.router.navigate(["/"+this.token+"/users/"+this.id]);
  }

  selectDependency(event:any):void{
    this.selectedDependency = parseInt((event.target as HTMLSelectElement).value);
  }

}

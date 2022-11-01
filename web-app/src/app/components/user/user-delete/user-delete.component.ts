import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  token:any = this.route.snapshot.paramMap.get("token");
  id:any = this.route.snapshot.paramMap.get("id");


  users:any ={
    name:"",
    username:"",
    password:"",
    role_id:null
  }


  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.readById(this.token,this.id).subscribe(users =>{
      this.token = users.token;
      this.users = users.user;
    })
  }

  deleteUser():void{
    this.userService.delete(this.token,this.id).subscribe(users =>{
      this.token = users.token;
      this.userService.showMessage("Usuario Excluido com Sucesso")
      this.router.navigate(["/"+this.token+"/users"]);
    })
  }

  back():void{
    this.router.navigate(["/"+this.token+"/users"]);
  }

}

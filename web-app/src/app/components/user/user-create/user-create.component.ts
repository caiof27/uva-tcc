import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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


  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  createUser():void{
    this.userService.create(this.token,this.users).subscribe(users =>{
      this.token = users.token;
      this.userService.showMessage("Usuario Criado");
      this.router.navigate(["/"+this.token+"/users"])
    })
  }

  back():void{
    this.router.navigate(["/"+this.token+"/users"]);
  }

}

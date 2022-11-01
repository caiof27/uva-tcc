import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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


  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.readById(this.token,this.id).subscribe(users =>{
      this.token = users.token;
      this.users.name = users.user.name;
      this.users.username = users.user.username;
      this.users.role_id = users.user.role_id;
    })
  }

  atualizarUser():void{
    this.userService.update(this.token,this.users,this.id).subscribe(users =>{
      this.token = users.token;
      this.userService.showMessage("Usuario Atualizado")
      this.router.navigate(["/"+this.token+"/users/"+this.id]);
    });
  }

  back():void{
    this.router.navigate(["/"+this.token+"/users/"+this.id]);
  }

}

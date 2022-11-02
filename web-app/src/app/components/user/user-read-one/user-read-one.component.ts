import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-read-one',
  templateUrl: './user-read-one.component.html',
  styleUrls: ['./user-read-one.component.css']
})
export class UserReadOneComponent implements OnInit {

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
      this.users = users.user[0];
    })
  }

  editUser():void{
    this.router.navigate(["/"+this.token+"/users/update/"+this.id]);
  }

  back():void{
    this.router.navigate(["/"+this.token+"/users"]);
  }

}

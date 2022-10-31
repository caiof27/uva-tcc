import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  users: UserModel = {
    username: "",
    password: ""
  };

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }
  
  login():void{
    this.userService.login(this.users).subscribe(user =>{
      const url = user.token+"/tasks".toString()
      this.router.navigate([url])
      
    })
  }

}

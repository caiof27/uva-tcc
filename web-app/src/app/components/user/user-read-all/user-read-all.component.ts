import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-read-all',
  templateUrl: './user-read-all.component.html',
  styleUrls: ['./user-read-all.component.css']
})
export class UserReadAllComponent implements OnInit {

  users: UserModel[] = [];
  token:any = this.route.snapshot.paramMap.get("token");
  displayedColumns = ['id','name','username','role_id','action']

  constructor(private userService: UserService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.userService.read(this.token).subscribe(users =>{
      this.users = users.user;
      this.token = users.token;
    })
  }

  navigateToUserCreate():void{
    this.router.navigate(["/"+this.token+"/users/create"]);
  }

}

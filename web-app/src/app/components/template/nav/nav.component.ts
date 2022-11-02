import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  token:any = this.route.snapshot.paramMap.get("token");

  role_id!:number;
  hasTechnicalAcess: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const {role_id} = this.parseJwt(this.token);
    this.role_id = role_id;
    if(this.role_id == 1 || this.role_id == 2){
      this.hasTechnicalAcess = true;
    }
  }



  parseJwt(token: string) {
    if (!token) {
      return;
    }

    const base64Url = token.split(".")[1];

    const base64 = base64Url.replace("-", "+").replace("_", "/");

    return JSON.parse(window.atob(base64));
  }

}

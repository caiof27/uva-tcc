import { Component, OnInit } from "@angular/core";
import {  Router } from "@angular/router";
import { HeaderService } from "src/app/components/template/header/header.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private headerService: HeaderService, private router: Router) {
    headerService.headerData = {
      title: "Inicio",
      icon: "home",
      routeUrl: "/"
    };
  }

  ngOnInit(): void {}

  login():void{
    this.router.navigate(["/login"])
  }
}

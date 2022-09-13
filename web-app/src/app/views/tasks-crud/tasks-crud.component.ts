import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderService } from "src/app/components/template/header/header.service";

@Component({
  selector: "app-tasks-crud",
  templateUrl: "./tasks-crud.component.html",
  styleUrls: ["./tasks-crud.component.css"],
})
export class TaskCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Abrir chamado",
      icon: "storefront",
      routeUrl: "/tasks",
    };
  }

  ngOnInit(): void {}

  navigateToTaskCreate(): void {
    this.router.navigate(["/tasks/create"]);
  }
}

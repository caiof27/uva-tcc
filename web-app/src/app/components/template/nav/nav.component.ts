import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  token:any = this.route.snapshot.paramMap.get("token");


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.token)
  }

}

import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  
  token:any = this.route.snapshot.paramMap.get("token");


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.token)
  }


}

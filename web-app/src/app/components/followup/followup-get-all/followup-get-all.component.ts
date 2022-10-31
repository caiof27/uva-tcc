import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FollowUpModel } from '../followup.model';
import { FollowupService } from '../followup.service';

@Component({
  selector: 'app-followup-get-all',
  templateUrl: './followup-get-all.component.html',
  styleUrls: ['./followup-get-all.component.css']
})
export class FollowupGetAllComponent implements OnInit {

  followups: any[] = [];
  displayedColumns = ['id','description','action']
  id:any = this.route.snapshot.paramMap.get("id");
  token:any = this.route.snapshot.paramMap.get("token");


  constructor(private followUpService: FollowupService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.followUpService.read(this.token,this.id).subscribe(followups=>{
      this.followups = followups.followups;
      this.token = followups.token;
    });
  }

  navigateToFollowUpCreate(): void {
    this.router.navigate(["/"+this.token+"/followups/"+this.id+"/create"]);
  }

  back(): void {
      this.router.navigate(["/"+this.token+"/tasks/"+this.id]);
  }

}

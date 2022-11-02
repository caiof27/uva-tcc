import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FollowUpModel } from '../followup.model';
import { FollowupService } from '../followup.service';

@Component({
  selector: 'app-followup-get-one',
  templateUrl: './followup-get-one.component.html',
  styleUrls: ['./followup-get-one.component.css']
})
export class FollowupGetOneComponent implements OnInit {

  followup!: FollowUpModel
  id:any = this.route.snapshot.paramMap.get("id");
  token:any = this.route.snapshot.paramMap.get("token");

  constructor(private router: Router ,private followUpService: FollowupService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.followUpService.readById(this.token,this.id).subscribe(followUps =>{
      this.followup = followUps.followups[0][0];
      this.token = followUps.token;
    })
  }

  

  back(): void {
    this.router.navigate(["/"+this.token+"/followups/"+this.id]);
  }

}

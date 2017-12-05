import { Component, OnInit } from '@angular/core';
import { DataService } from'../data.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs:any;
  constructor(private dataservice:DataService){
   this.dataservice.getJobs().subscribe(data => {
    console.log(data);
    this.jobs=data;
  });
  }

  ngOnInit() {
   console.log(this.jobs);
  }

}

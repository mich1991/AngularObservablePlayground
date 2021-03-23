import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Person } from '../services/data-base.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit, OnDestroy {
  persons: Person[]
  
  private subscriptions = new Subscription()

  constructor(private dataService: DataService) { 
    this.persons = []
  }

  ngOnInit(): void {
    const sub = this.dataService.behaviorSubject.subscribe(
      (data:Person[])=> {
        this.persons = data
        console.log('Left component subscription')
      },
      error => console.log(error),
      ()=> console.log('LeftComponent complete')
    )
    this.subscriptions.add(sub)
  }

  ngOnDestroy(): void{
    this.subscriptions.unsubscribe()
  }

}

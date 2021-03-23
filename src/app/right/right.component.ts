import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {DataService} from '../services/data.service'
import {Person} from '../services/data-base.service'

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  persons?: Observable<Person[]>;

  constructor(private dataService : DataService) {
   }

  ngOnInit(): void {
    this.persons = this.dataService.subject.asObservable();
  }

}

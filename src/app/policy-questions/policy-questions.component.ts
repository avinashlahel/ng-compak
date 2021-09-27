import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-policy-questions',
  templateUrl: './policy-questions.component.html',
  styleUrls: ['./policy-questions.component.css']
})
export class PolicyQuestionsComponent implements OnInit {

  private policyNumber: string;

  constructor(private dataService: DataService) {
    this.policyNumber = this.dataService._policyNumber;
  }

  ngOnInit(): void {
  }

}

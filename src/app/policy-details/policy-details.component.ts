import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent implements OnInit {

  policyForm = this.fb.group({
    polNum : ['', [Validators.required]],
    policyEffDate: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  proceed() {
    console.log(this.policyForm.value);
  }
}

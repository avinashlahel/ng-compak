import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../services/auth.service";

const POLICY_ENDPOINT = "http://localhost:9090/v1/policy"

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent implements OnInit {

  states = ['MA', 'NJ'];

  policyForm = this.fb.group({
    stateAlphaCode: ['', [Validators.required]],
    agencyNumber: ['', [Validators.required]],
    policyEffDate: ['', Validators.required]
  })

  constructor(private fb: FormBuilder,
              private httpClient: HttpClient,
              private authService: AuthService) {
  }

  public ngOnInit(): void {
  }

  public proceed() {
    let defaultValues = this.getDefaults();
    let postBody = {...defaultValues, ...this.policyForm.value}
    this.httpClient
      .post(POLICY_ENDPOINT, postBody, this.getHeaders())
      .subscribe((resp) => console.log(resp));
  }

  private getDefaults() {
    return {
      policyStatusCode: 'A',
      payOptionCode: 'M',
      billToCode: 'YS',
      billTypeCode: "S",
      policyTermTypeCode: 'Yearly',
      groupLineCode: '42'
    }
  }

  private getHeaders() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService._token}`
    });
    return {headers};
  }
}

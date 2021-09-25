import {Component, OnInit} from '@angular/core';
import {MediaObserver} from "@angular/flex-layout";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-compak';
  mediaSub: Subscription | undefined;

  constructor(private mediaObserver: MediaObserver) {
  }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver
      .asObservable()
      .subscribe();
  }
}

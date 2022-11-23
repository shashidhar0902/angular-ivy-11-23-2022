import { Component, OnInit } from '@angular/core';
import { IDetail } from './details';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-api',
  templateUrl: './show-api.component.html',
  styleUrls: ['./show-api.component.css'],
})
export class ShowApiComponent implements OnInit {
  details: IDetail[];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    const subs = this.http
      .get('https://shashidhar0902.github.io/test.json')
      .subscribe((Response: IDetail[]) => {
        // If response comes hideloader() function is called
        // to hide that loader
        console.log(Response);

        this.details = Response;
      });
  }
}
//).pipe(tap(data => (console.log('ALL:',JSON.stringify(data)))),catchError(this.handleError)

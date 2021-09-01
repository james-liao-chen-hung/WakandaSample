import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safty-setting',
  templateUrl: './safty-setting.component.html',
  styleUrls: ['./safty-setting.component.css']
})
export class SaftySettingComponent implements OnInit {

  baseUrl = 'https://localhost:5001/api/';
  settings: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getSaftyProgramSetting();
  }

  getSaftyProgramSetting() {
    return this.http.get(this.baseUrl + 'saftyprogramsetting/safty-program-setting').subscribe(response => {
      console.log(response);
      this.settings = response;
    }, error => {
      console.log(error);
    })
  }
}

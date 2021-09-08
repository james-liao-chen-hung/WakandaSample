import { uploadJsonData } from './../_models/upload';
import { ToastrService } from 'ngx-toastr';
import { upload } from 'src/app/_models/upload';

import { JsonPathDialogComponent } from './json-path-dialog/json-path-dialog.component';
import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-safty-setting',
  templateUrl: './safty-setting.component.html',
  styleUrls: ['./safty-setting.component.css']
})
export class SaftySettingComponent implements OnInit {
  baseUrl = environment.apiUrl;
  settings: uploadJsonData;
  data: any;
  json: uploadJsonData[]= [];

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getSaftyProgramSetting();
  }

  getSaftyProgramSetting() {
    return this.http.get(this.baseUrl + 'saftyprogramsetting/safty-program-setting').subscribe(response => {
      console.log(response);
      this.data = response;
    }, error => {
      console.log(error);
    })
  }

  setSaftyProgramSetting() {
    this.http.post(this.baseUrl + 'saftyprogramsetting/safty-program-setting', this.settings).subscribe(res => {
      console.log(res);
    });
  }

  jsonPathDialog(): void {
    let dialogRef = this.dialog.open(JsonPathDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("after : " + result.isUpload);
      if(result.isUpload)
      {
        this.json = JSON.parse(result.message);
        this.json.forEach(element => {
          this.settings = element;
          console.log(this.settings);
          //this.settings = element;
          this.setSaftyProgramSetting();
        });

        this.getSaftyProgramSetting();
      }
      else
      {
        this.toastr.error((result as upload).message);
      }
    }, error => {
      console.log(error);
    });
  }

  downloadFile() {
    return this.http.get(this.baseUrl + 'saftyprogramsetting/safty-program-setting',{
      responseType: 'arraybuffer'}).subscribe(response => {
      this.downLoadFile(response, "safty-program-setting.json");
    }, error => {
      console.log(error);
    })
  }

  downLoadFile(data: any, type: string) {
    var blob = new Blob([data], { type: type});
    var url = window.URL.createObjectURL(blob);
    const fileName = 'safty-program-setting.json';
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = fileName;
    a.click();
  }

}



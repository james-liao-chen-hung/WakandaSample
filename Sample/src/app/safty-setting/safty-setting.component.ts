import { OutputJsonDialogComponent } from './output-json-dialog/output-json-dialog/output-json-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { upload } from 'src/app/_models/upload';

import { JsonPathDialogComponent } from './json-path-dialog/json-path-dialog.component';
import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-safty-setting',
  templateUrl: './safty-setting.component.html',
  styleUrls: ['./safty-setting.component.css']
})
export class SaftySettingComponent implements OnInit {
  baseUrl = environment.apiUrl;
  settings: any;

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
      this.settings = response;
    }, error => {
      console.log(error);
    })
  }

  setSaftyProgramSetting() {
    return this.http.post(this.baseUrl + 'saftyprogramsetting/safty-program-setting', this.settings).subscribe(res => {
      console.log(res);
    });
  }

  jsonPathDialog(): void {
    const dialogRef = this.dialog.open(JsonPathDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {

        if((result as upload).isUpload)
        {
          this.http.get('../../assets/Upload/data.json').subscribe(data => {
            JSON.parse(JSON.stringify(data)).forEach(element => {
              this.settings = element;
              this.setSaftyProgramSetting();
            });
          });
          this.getSaftyProgramSetting();
        }
        else
        {
          this.toastr.error((result as upload).message);
        }
    });
  }

  outputPathDialog() {
    const dialogRef = this.dialog.open(OutputJsonDialogComponent, {
      width: '400px'
    });
  }
}



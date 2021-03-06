import { upload } from './../../_models/upload';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-json-path-dialog',
  templateUrl: './json-path-dialog.component.html',
  styleUrls: ['./json-path-dialog.component.css']
})
export class JsonPathDialogComponent {
  baseUrl = environment.apiUrl;
  selectedFile: File = null;

  constructor(
    public dialogRef: MatDialogRef<JsonPathDialogComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: upload
    ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick() {
    const fd = new FormData();
    fd.append("files", this.selectedFile, this.selectedFile.name);
    this.http.post<upload>( this.baseUrl + 'fileupload/json', fd).subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.dialogRef.close(this.data);
    })
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

}

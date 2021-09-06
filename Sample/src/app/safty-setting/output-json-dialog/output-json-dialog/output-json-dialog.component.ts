import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-output-json-dialog',
  templateUrl: './output-json-dialog.component.html',
  styleUrls: ['./output-json-dialog.component.css']
})
export class OutputJsonDialogComponent implements OnInit {
  baseUrl = environment.apiUrl;

  constructor(
    public dialogRef: MatDialogRef<OutputJsonDialogComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public outputPath: string
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick() {
  }

  onFolderSelected(event) {

  }
}

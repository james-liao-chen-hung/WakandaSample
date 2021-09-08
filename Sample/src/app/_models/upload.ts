export interface upload {
  message: string;
  isUpload: boolean;
}

export interface uploadJsonData {
  ProgramName: string;
  OriginalFileName: string;
  InternalName: string;
  ProductName: string;
  CompanyName: string;
  Description: string;
  Signatory: string;
  ProductVersion: string;
  Parameter: string;
  UpdateTime: Date;
}

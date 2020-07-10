import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-verify-dialo',
  templateUrl: './password-verify-dialo.component.html',
  styleUrls: ['./password-verify-dialo.component.scss']
})
export class PasswordVerifyDialoComponent implements OnInit {
  public password: string;
  public FormGroup: FormGroup;
  public isPasswordRight = true;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<PasswordVerifyDialoComponent>,
  ) { }

  ngOnInit(): void {
    this.FormGroup = new FormGroup({
      password : new FormControl('', [Validators.required])
     
    });
  }
  public close(validate){
    this.dialogRef.close({validate});
  }

  public checkpassword(){
    if(this.FormGroup.value.password === this.data.password){
      this.close(true);
      return;
    }
    this.isPasswordRight = false;
  }
}

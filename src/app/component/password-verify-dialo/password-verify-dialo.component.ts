import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { notepad } from '../model/notepad';

@Component({
  selector: 'app-password-verify-dialo',
  templateUrl: './password-verify-dialo.component.html',
  styleUrls: ['./password-verify-dialo.component.scss']
})
export class PasswordVerifyDialoComponent implements OnInit {
  @Input() public notepad: notepad;
  @Output() private onclosed = new EventEmitter();
  @Input () public fromCreateNote: boolean;
  public FormGroup: FormGroup;
  public isPasswordRight = true;
  public isSubmit = false;
  constructor() { }

  ngOnInit(): void {
    this.FormGroup = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)])

    } );
  }
  public onSubmit(): void {
    this.isSubmit = true;
    if(this.fromCreateNote &&  this.FormGroup.valid){
      this.close(this.FormGroup.value.password)
    }
    else if (!this.fromCreateNote && this.FormGroup.value.password === this.notepad.password && this.FormGroup.valid )  {
      this.close(true);
    }
    this.isPasswordRight = false;
  }

  public close(validate): void {
    this.onclosed.emit(validate);
  }

}

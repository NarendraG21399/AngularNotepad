import { Component, OnInit } from '@angular/core';
import { notepad } from '../model/notepad';
import { NotepadService } from 'src/app/service/notepad.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PasswordVerifyDialoComponent } from '../password-verify-dialo/password-verify-dialo.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public notepadList: notepad[];
  constructor(private notepadservice: NotepadService, private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.notepadList = this.notepadservice.getList();
  }
  public navigate(notepad: notepad){
    if(notepad.isLock){
      this.openDialog(notepad);
      return ;
    }
    this.router.navigate(['CreteNotepad', notepad.id])
  }
  openDialog( notepad): void {
    const dialogRef = this.dialog.open(PasswordVerifyDialoComponent, {
      width: '330px',
      height: '230px',
      hasBackdrop: false,
      data: {password: notepad.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result.validate){
        this.router.navigate(['CreteNotepad', notepad.id])
      }
      });
  }
}

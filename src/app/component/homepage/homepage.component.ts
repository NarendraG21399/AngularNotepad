import { Component, OnInit } from '@angular/core';
import { notepad } from '../model/notepad';
import { NotepadService } from 'src/app/service/notepad.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public notepadList: notepad[];
  public showModel = false;
  public selectedList: notepad;
  constructor(private notepadservice: NotepadService, private router: Router) { }

  ngOnInit(): void {
    this.notepadList = this.notepadservice.getList();
  }
  public navigate(notepad: notepad) {
    if (notepad.isLock) {
      this.showModel = true;
      this.selectedList = notepad;
      return;
    }
    this.router.navigate(['CreteNotepad', notepad.id])
  }
  public validate(data?) {
    if(data){
      this.router.navigate(['CreteNotepad', this.selectedList.id])
    }
    this.showModel = false;
  }

}

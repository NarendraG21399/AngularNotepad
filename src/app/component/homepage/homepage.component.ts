import { Component, OnInit } from '@angular/core';
import { Notepad } from '../model/notepad';
import { NotepadService } from 'src/app/service/notepad.service';
import { Router } from '@angular/router';
import { CONSTANT, ROUTINGPATH } from '../share/constant';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public notepadList: Notepad[];
  public showModel = false;
  public selectedList: Notepad;
  constructor(private notepadservice: NotepadService, private router: Router) { }

  ngOnInit(): void {
    this.getNotepadList();
  }

  private getNotepadList() {
    this.notepadList = this.notepadservice.getList();
  }
  public navigate(notepad: Notepad) {
    if (notepad.isLock) {
      this.showModel = true;
      this.selectedList = notepad;
      return;
    }
    this.router.navigate([ROUTINGPATH.EDIT_NOTEPAD, notepad.id]);
  }
  public validate(data?) {
    if (data) {
      this.router.navigate([ROUTINGPATH.EDIT_NOTEPAD, this.selectedList.id]);
    }
    this.showModel = false;
  }
  public delete(notepad: Notepad): void {
    if (confirm(CONSTANT.CONFIRM_MESSAGE)) {
      this.notepadservice.delete(notepad.id);
      this.getNotepadList();
    }
  }

}

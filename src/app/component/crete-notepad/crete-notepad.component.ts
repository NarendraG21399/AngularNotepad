import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { notepad } from '../model/notepad';
import { NotepadService } from 'src/app/service/notepad.service';

@Component({
  selector: 'app-crete-notepad',
  templateUrl: './crete-notepad.component.html',
  styleUrls: ['./crete-notepad.component.scss']
})
export class CreteNotepadComponent implements OnInit, OnDestroy {
  private id: number;
  public notepad: any= {isLock: false , password: null};
  public text: string;
  constructor(private activatedRoute: ActivatedRoute, private notepadservice: NotepadService) {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id)
    });
  }
  ngOnInit(): void {
    if (this.id) {
      this.notepad = this.notepadservice.getList().find(data => data.id === this.id);
       console.log(this.notepad)
    }
  }

  public saveNotepad(): void {
    if (this.id) {
      this.updateNoted();
    } else {
      this.createNotePad();
    }
  }
  private createNotePad() {
    this.notepadservice.setList({ id: new Date().getTime(), text: this.notepad.text, modified: new Date(), title: 'gawade', create: new Date(), isLock:  this.notepad.isLock , password: this.notepad.password })
  }
  private updateNoted() {
    this.notepadservice.getList().forEach(ele => {
      if (ele.id === this.id) {
        ele.text = this.notepad.text,
        ele.modified = new Date();
        ele.isLock = this.notepad.isLock;
      }
    })
    this.notepadservice.setLocalstrorage();
  }
  lockNotepad(){
  this.notepad.isLock = !this.notepad.isLock;
  this.notepad.password = 'Narendra';
  }
  ngOnDestroy(): void {

  }
}

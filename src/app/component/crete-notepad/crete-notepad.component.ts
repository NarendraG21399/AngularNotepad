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
  public notepad: any = { isLock: false, password: null };
  public text: string;
  public password: boolean;
  public isSaveNotepad: boolean;
  public message: string;
  public toaster: boolean;

  constructor(private activatedRoute: ActivatedRoute, private notepadservice: NotepadService) {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id)
    });
  }
  ngOnInit(): void {
    if (this.id) {
      this.notepad = this.notepadservice.getList().find(data => data.id === this.id);

    }

  }

  public saveNotepad(): void {
    if (this.id || this.notepad.id) {
      this.updateNoted();
    } else {
      this.isSaveNotepad = true;
    }
  }
  public createNotePad(event) {
    this.isSaveNotepad = false;
    if (event) {
      this.notepad = { id: new Date().getTime(), text: this.notepad.text, modified: new Date(), title: event, create: new Date(), isLock: this.notepad.isLock, password: this.notepad.password }
      this.notepadservice.setList(this.notepad);
      
      this.showtoaster('file saved sucessfully!')
    }
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
    this.showtoaster('file saved sucessfully!')
  }
  lockNotepad() {
    this.password = true;
  }
  public savePassword(event) {
    this.password = false;
    if (event) {
      this.notepad.isLock = !this.notepad.isLock;
      this.notepad.password = event;
     this.showtoaster('file lock sucessfully!')
    }
  }

  private showtoaster(message){
    this.toaster = true;
    this.message = message;
    setTimeout(() => {this.toaster = false }, 3000);
  }

  public unLock(){
    if(confirm('Are you sure')){
    this.notepad.isLock = !this.notepad.isLock;
    this.showtoaster('file unlocked Sucessfully');
    }
  }
  ngOnDestroy(): void {
  }
}

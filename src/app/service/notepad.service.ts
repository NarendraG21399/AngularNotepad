import { Injectable } from '@angular/core';
import { Notepad } from '../component/model/notepad';
@Injectable({
  providedIn: 'root',
})
export class NotepadService {
  private notepad: Notepad[] = JSON.parse(localStorage.getItem('notepadlist')) || [];
  public isAuthenticate: boolean;
  constructor() {}
  public getList(): Notepad[] {
    return this.notepad;
  }

  public setList(data: Notepad): void {
    this.notepad.push(data);
    this.setLocalstrorage();
  }

  public setLocalstrorage(): void {
    localStorage.setItem('notepadlist', JSON.stringify(this.notepad));
  }
  public delete(id: number) {
    const notepad = this.notepad.filter((ele) => ele.id !== id);
    this.notepad = notepad;
    this.setLocalstrorage();
  }
  public getNotepad(id: number): Notepad {
    return this.getList().find((data) => data.id === id);
  }
  public updateNotepad(id: number, text: string , islock: boolean): void{
    this.notepad.forEach((ele) => {
      if (ele.id === id) {
        ele.text = text,
        ele.modified = new Date();
        ele.isLock = islock;
      }
    });
    this.setLocalstrorage();
  }
}

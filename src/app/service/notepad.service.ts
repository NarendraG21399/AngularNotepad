import { Injectable } from '@angular/core';
import { Notepad } from '../component/model/notepad';
@Injectable({
  providedIn: 'root',
})
export class NotepadService {
  private notepadList: Notepad[] = JSON.parse(localStorage.getItem('notepadlist')) || [];
  public isAuthenticate: boolean;
  constructor() {}
  public getList(): Notepad[] {
    return this.notepadList;
  }

  public setList(data: Notepad): void {
    this.notepadList.push(data);
    this.setLocalstrorage();
  }

  public setLocalstrorage(): void {
    localStorage.setItem('notepadlist', JSON.stringify(this.notepadList));
  }
  public delete(id: number) {
    const notepadList = this.notepadList.filter((ele) => ele.id !== id);
    this.notepadList = notepadList;
    this.setLocalstrorage();
  }
  public getNotepad(id: number): Notepad {
    return this.getList().find((data) => data.id === id);
  }
  public updateNotepad(id: number, text: string , islock: boolean): void{
    this.notepadList.forEach((ele) => {
      if (ele.id === id) {
        ele.text = text,
        ele.modified = new Date();
        ele.isLock = islock;
      }
    });
    this.setLocalstrorage();
  }
}

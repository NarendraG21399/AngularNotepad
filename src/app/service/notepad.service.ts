import { Injectable } from '@angular/core';
 
import { notepad } from '../component/model/notepad';
 
@Injectable({
  providedIn: 'root'
})
export class NotepadService {
  private notepad: notepad[] =  JSON.parse(localStorage.getItem('notepadlist')) || [];
  constructor() {}


  public getList(): notepad[]{
    return this.notepad;
  }

  public setList(data: notepad): void{
    this.notepad.push(data)
    this.setLocalstrorage();
  }

  public setLocalstrorage():void{
     localStorage.setItem('notepadlist' , JSON.stringify(this.notepad))
  }
  
}

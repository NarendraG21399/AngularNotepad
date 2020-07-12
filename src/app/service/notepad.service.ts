import { Injectable } from '@angular/core';
 
import { notepad } from '../component/model/notepad';
 
@Injectable({
  providedIn: 'root'
})
export class NotepadService {
  private notepad: notepad[] =  JSON.parse(localStorage.getItem('notepadlist')) || [];
  public isAuthenticate:boolean;
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
  
  public delete(id){
    const notepad = this.notepad.filter(ele => ele.id !== id);
    this.notepad = notepad;
    this.setLocalstrorage();
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { CreteNotepadComponent } from './crete-notepad/crete-notepad.component';
import { PasswordVerifyDialoComponent } from './password-verify-dialo/password-verify-dialo.component';
import { NotepadSaveComponent } from './notepad-save/notepad-save.component';
 import { ToasterComponent } from './toaster/toaster.component';
 

@NgModule({
  declarations: [HomepageComponent,CreteNotepadComponent,PasswordVerifyDialoComponent,NotepadSaveComponent,ToasterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
     FormsModule,
    ReactiveFormsModule,
     
  ]
})
export class HomeModule { }

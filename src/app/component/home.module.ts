import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { CreteNotepadComponent } from './crete-notepad/crete-notepad.component';
import { NotepadSaveComponent } from './notepad-save/notepad-save.component';
import { ToasterComponent } from './toaster/toaster.component';
import { PasswordPopupComponent } from './password-popup/password-popup.component';

@NgModule({
  declarations: [HomepageComponent, CreteNotepadComponent, PasswordPopupComponent, NotepadSaveComponent, ToasterComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class HomeModule { }

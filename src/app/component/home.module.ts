import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { CreteNotepadComponent } from './crete-notepad/crete-notepad.component';
import { PasswordVerifyDialoComponent } from './password-verify-dialo/password-verify-dialo.component';


@NgModule({
  declarations: [HomepageComponent,CreteNotepadComponent,PasswordVerifyDialoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatDialogModule
  ]
})
export class HomeModule { }

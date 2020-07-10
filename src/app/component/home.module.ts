import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from "@angular/forms";

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
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule

  ]
})
export class HomeModule { }

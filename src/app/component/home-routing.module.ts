import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CreteNotepadComponent } from './crete-notepad/crete-notepad.component';
import { AuthGuard } from '../service/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
  path: 'home',
   component:HomepageComponent
},

{
  path: 'CreteNotepad',
  component: CreteNotepadComponent
},
{
  path: 'editNotepad/:id',
  component: CreteNotepadComponent,
  canActivate: [AuthGuard]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

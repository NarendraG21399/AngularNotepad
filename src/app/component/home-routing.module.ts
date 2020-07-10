import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CreteNotepadComponent } from './crete-notepad/crete-notepad.component';


const routes: Routes = [{
  path: 'home',
   component:HomepageComponent
},
{
  path: 'CreteNotepad',
  component: CreteNotepadComponent
},
{
  path: 'CreteNotepad/:id',
  component: CreteNotepadComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

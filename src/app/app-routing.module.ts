import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { SelectComponent } from './select/select.component';
import { UpdateComponent } from './update/update.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  { path: 'create', component:CreateComponent },
  { path: 'select', component:SelectComponent },
  { path: 'user', component:UserComponent },
  { path: 'update', component:UpdateComponent},
  { path:'details', component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

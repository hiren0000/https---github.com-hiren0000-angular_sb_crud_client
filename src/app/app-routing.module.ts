import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
{
  path:"details/:Id", component:UserDetailsComponent, pathMatch:"full"
},
{
  path:"add", component:AddUserComponent
},
{
  path:"users", component:ListUsersComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

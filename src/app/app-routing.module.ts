import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserslistComponent } from './mycomponent/userslist/userslist.component';
import { UsereditComponent } from './mycomponent/useredit/useredit.component';
import { AdduserComponent } from './mycomponent/adduser/adduser.component';


const routes: Routes = [
  { path: '', redirectTo: '/userslist', pathMatch: "full" },
  { path: 'userslist', component: UserslistComponent },
  { path: 'useredit/:id', component: UsereditComponent },
  { path: 'adduser', component: AdduserComponent },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

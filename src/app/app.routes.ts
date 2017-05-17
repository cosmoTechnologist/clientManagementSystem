import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthService } from './auth.service';
import { EmailComponent } from './email/email.component';
import { AddUserComponent } from './add-user/add-user.component';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthService] },
    { path: 'add-user', component:AddUserComponent, canActivate: [AuthService]}

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
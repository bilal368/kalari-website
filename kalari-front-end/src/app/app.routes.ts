// import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
export const routes: Routes = [
    { path: '', component:HomePageComponent, data: { title: 'Home page'}},
    { path: 'login', component: LoginPageComponent,  data: { title: 'Kalari Login' } },
    { path: 'about', component: AboutUsComponent,  data: { title: 'About kalaripayattu' } },
    { path: 'contact', component: ContactComponent,  data: { title: 'About kalaripayattu' } },
    { path: 'userlogin', component: UserHomePageComponent,  data: { title: 'user login' } },
    { path: 'register', component: UserRegistrationComponent,  data: { title: 'user register' } }
    
    
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
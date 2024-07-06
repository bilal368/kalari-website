import { Component } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';
import { RouterModule,Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterModule,MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {

  }

  login(){
    console.log("login1111");
    
    this.router.navigateByUrl('/login')
  }
  Register(){
    this.router.navigateByUrl('/register')
  }
}

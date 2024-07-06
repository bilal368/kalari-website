import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginService } from '../../services/login/login.service';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule, HttpClientModule,PopupComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  LoginForm!: FormGroup

  constructor(private formBuilder: FormBuilder,private auth: LoginService,private popUp: MatDialog,private router: Router) {
    this.LoginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn() {
    if (this.LoginForm.valid) {
      console.log("login details", this.LoginForm.value)
      const email = this.LoginForm.value.username
      const password = this.LoginForm.value.password
      this.auth.login(this.LoginForm.value).subscribe((res: any) => {
        console.log("response api",res)
        if(res.status == true){
          console.log("true");
          this.popUp.open(PopupComponent,{ width: '250px',
          height: '250px',
          data: { message: res.message,buttonvalue:"OK" }
          })
          this.router.navigateByUrl('/userlogin')
        }
        else{
          
        }
      },error=>{
        console.log(error.HttpErrorResponse);
        this.popUp.open(PopupComponent,{ width: '250px',
          height: '250px',
          data: { message: error.error.message,buttonvalue:"Cancel" }
          })
      })
    }
  }
}

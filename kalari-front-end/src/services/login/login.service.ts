import { Injectable, inject } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private url = 'http://localhost:3008/api/login';

  http = inject(HttpClient)
  post: any =[];

  login(data: any) {   
    return this.http.post(this.url, data)
  }

}

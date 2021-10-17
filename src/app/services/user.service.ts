import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

   getUser(){
     return this.http.get(this.url+ "/users?per_page=6&delay=10")
            .pipe(
              map(( resp: any) => resp['data'])
            )
   }
}

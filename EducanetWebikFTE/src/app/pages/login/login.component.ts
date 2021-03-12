import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Register} from '../../models/register.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usernameLog: string;
  passwordLog: string;

  constructor(private httpclient: HttpClient) { }
  posts: Register[] = [];

  loginUser(): void {
    this.httpclient.get<Register[]>('api/users/all')
      .subscribe((data) => {
        console.log(data);
      },
        () => {});
  }


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Register} from '../../models/register.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private httpclient: HttpClient) { }
  posts: Register[] = [];

  loginUser(): void {
    this.httpclient.get<Register[]>('api/users/all')
      .subscribe((data) => {
          this.posts = data;
          console.log(this.username, this.password);
          console.log(data);
        });

    for (const post of this.posts) {
      console.log(post.password, post.password, 'this is in the for ');
      if (post.username === this.username && post.password === this.password) {

        this.httpclient.post<Register[]>('api/logged', {username: this.username, password: this.password})
          .subscribe((data) => {
            console.log(data);
            console.log('logged in');
          });
        break;
      }
    }
  }


  ngOnInit(): void {
  }

}

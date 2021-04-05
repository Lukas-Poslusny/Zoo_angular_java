import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Register} from '../../models/register.interface';
import {TokenService} from '../../services/token.service';
import {Token} from '../../models/token';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private httpclient: HttpClient, private tokenService: TokenService, private router: Router) {
  }

  posts: Register[] = [];

  loginUser(): void {

    this.httpclient.post<Token>('api/logged', {username: this.username, password: this.password})
      .subscribe((data) => {
        this.tokenService.Token = data.body;
        this.tokenService.username = this.username;
        console.log(data.body);
        this.router.navigateByUrl('posts');
      });
  }

  ngOnInit(): void {

  }

}

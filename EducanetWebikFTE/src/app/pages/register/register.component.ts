import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/post.interface';
import {HttpClient} from '@angular/common/http';
import {Register} from '../../models/register.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  duplicateRegister = false;


  constructor(private httpclient: HttpClient, private router: Router) {
  }

  posts: Register[] = [];


  registerUser(): void {
    this.httpclient.post<Register[]>('api/users', {username: this.username, password: this.password}, {})
      .subscribe((data) => {
          this.posts = data;
          console.log(this.username, this.password);
          this.router.navigateByUrl('login');
        },
        () => {
          this.duplicateRegister = true;
        });
  }

  ngOnInit(): void {
  }
}

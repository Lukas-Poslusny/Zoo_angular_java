import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/post.interface';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  name: string;
  age: number;
  gender: string;
  weight: number;

  posts: Post[] = [];

  constructor(private httpclient: HttpClient, private tokenService: TokenService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAnimals();
  }

  createAnimal(): void {
    this.httpclient.post<Post[]>('api/animals', {name: this.name, age: this.age, weight: this.weight, gender: this.gender})
      .subscribe((data) => {
          this.posts = data;
          this.getAnimals();
        },
        () => {
          console.log('animal could not be created');
        });
  }

  getAnimals(): void {
    if (this.tokenService.Token != null) {
      this.httpclient.get<Post[]>('api/animals', {
        headers: {
          token: this.tokenService.Token,
          username: this.tokenService.username
        }
      })
        .subscribe((data) => {
          this.posts = data;
          console.log(data);
        });
    } else {
      this.router.navigateByUrl('users');
    }
  }

  editAnimal(id: number): void {

  }

  deleteAnimal(id: number): void {
    this.httpclient.delete('api/animals/' + id, {})
      .subscribe((data) => {
        this.getAnimals();
        },
        (error => {
          console.log(error);
        })
      );
  }
}

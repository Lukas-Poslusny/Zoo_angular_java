import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.httpclient.get<Post[]>('/api/animals')
      .subscribe((data) => {
        this.posts = data;
        console.log(data);
      });
  }
}

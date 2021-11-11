import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://db-blog-cris.herokuapp.com/posts')
  }

  PostMessage(post: Post) {
    return this.http.post('https://db-blog-cris.herokuapp.com/posts', post)
  }
}

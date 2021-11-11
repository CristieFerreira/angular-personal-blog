import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost: Post[] = [];
  post: Post = new Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts()
  }

  findPosts(){
    this.postService.getPosts().subscribe((data: any) => {
      this.listPost = data;
    })
  }

  registerMessage() {
    this.postService.PostMessage(this.post).subscribe((data: any) => {
      this.post = data
      location.assign('/feed')
    })
  }
}

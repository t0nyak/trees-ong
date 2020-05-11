import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models/post";
import { BlogService } from "src/app/services/blog.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  posts: Post[];
  thereIsPagination: boolean = false;

  constructor(private blogService: BlogService) {}

  async ngOnInit() {
    this.posts = await this.blogService.getPosts();
    this.thereIsPagination = this.posts.length > 6;
  }
}

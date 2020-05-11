import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models/post";
import { BlogService } from "src/app/services/blog.service";

@Component({
  selector: "app-blog-summary",
  templateUrl: "./blog-summary.component.html",
  styleUrls: ["./blog-summary.component.scss"],
})
export class BlogSummaryComponent implements OnInit {
  posts: Post[];

  constructor(private blogService: BlogService) {}

  async ngOnInit() {
    this.posts = await this.blogService.getLastPosts();
    this.posts.forEach((elem) => {
      console.log(elem);
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models/post";
import { ActivatedRoute } from "@angular/router";
import { BlogService } from "src/app/services/blog.service";
import { BlogCategory } from "src/app/models/blog-category";

@Component({
  selector: "app-blog-single",
  templateUrl: "./blog-single.component.html",
  styleUrls: ["./blog-single.component.scss"],
})
export class BlogSingleComponent implements OnInit {
  post: Post;
  isLoaded: boolean = false;
  latestPosts: Post[];
  categories: BlogCategory[];

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  async ngOnInit() {
    this.post = await this.blogService.getPost(this.route.snapshot.params.id);
    this.latestPosts = await this.blogService.getLastPosts();
    this.categories = await this.blogService.getCategories();
    console.log("post", this.post);
    console.log("latestPosts", this.latestPosts);
    console.log("categories", this.categories);
    this.isLoaded = true;
  }
}

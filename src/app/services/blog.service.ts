import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "../models/post";
import { environment } from "src/environments/environment";
import { BlogCategory } from "../models/blog-category";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  constructor(private http: HttpClient) {}

  async getLastPosts(): Promise<Post[]> {
    return await this.http
      .get<Post[]>(`${environment.apiUrl}blog/posts/latest_posts/`)
      .toPromise();
  }

  async getPosts(): Promise<Post[]> {
    return await this.http
      .get<Post[]>(`${environment.apiUrl}blog/posts/`)
      .toPromise();
  }

  async getPost(uuid: string): Promise<Post> {
    return await this.http
      .get<Post>(`${environment.apiUrl}blog/posts/${uuid}`)
      .toPromise();
  }

  async getCategories(): Promise<BlogCategory[]> {
    return await this.http
      .get<BlogCategory[]>(`${environment.apiUrl}blog/categories/`)
      .toPromise();
  }
}

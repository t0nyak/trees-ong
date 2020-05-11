import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "../models/post";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  constructor(private http: HttpClient) {}

  async getLastPosts(): Promise<Post[]> {
    return await this.http
      .get<Post[]>(`${environment.apiUrl}blog/posts/last`)
      .toPromise();
  }

  async getPosts(): Promise<Post[]> {
    return await this.http
      .get<Post[]>(`${environment.apiUrl}blog/posts`)
      .toPromise();
  }
}

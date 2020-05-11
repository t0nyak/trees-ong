import { Author } from "./author";

export interface Post {
  uuid: string;
  title: string;
  author: Author;
  body: string;
  created_at: string;
}

import { Injectable } from "@angular/core";
import { Project } from "../models/project";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  async getLastProjects(): Promise<Project[]> {
    return await this.http
      .get<Project[]>(`${environment.apiUrl}projects/last`)
      .toPromise();
  }

  async getProjects(): Promise<Project[]> {
    return await this.http
      .get<Project[]>(`${environment.apiUrl}projects`)
      .toPromise();
  }
}

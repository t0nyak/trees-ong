import { Component, OnInit } from "@angular/core";
import { ProjectService } from "src/app/services/project.service";
import { Project } from "src/app/models/project";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  paginationIsNeeded: boolean;

  constructor(private projectService: ProjectService) {}

  async ngOnInit() {
    this.projects = await this.projectService.getProjects();
    this.projects.forEach((elem) => {
      elem["percent"] = (elem.raised / elem.goal) * 100;
    });
    this.paginationIsNeeded = this.projects.length > 6;
  }
}

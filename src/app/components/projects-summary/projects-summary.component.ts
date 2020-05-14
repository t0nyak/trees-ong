import { Component, OnInit } from "@angular/core";
import { ProjectService } from "src/app/services/project.service";
import { Project } from "src/app/models/project";
import { Router } from "@angular/router";

@Component({
  selector: "app-projects-summary",
  templateUrl: "./projects-summary.component.html",
  styleUrls: ["./projects-summary.component.scss"],
})
export class ProjectsSummaryComponent implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService, private router: Router) {}

  async ngOnInit() {
    this.projects = await this.projectService.getLastProjects();
    this.projects.forEach((elem) => {
      elem["percent"] = (elem.raised / elem.goal) * 100;
    });
  }

  // getProjectDetail(uuid: string) {
  //   this.router.navigate()
  // }
}

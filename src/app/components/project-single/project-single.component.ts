import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { ProjectService } from "src/app/services/project.service";
import { Project } from "src/app/models/project";
import { Observable } from "rxjs";

@Component({
  selector: "app-project-single",
  templateUrl: "./project-single.component.html",
  styleUrls: ["./project-single.component.scss"],
})
export class ProjectSingleComponent implements OnInit {
  project: Project;
  isLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  async ngOnInit() {
    this.project = await this.projectService.getProject(
      this.route.snapshot.params.id
    );
    this.isLoaded = true;
  }
}

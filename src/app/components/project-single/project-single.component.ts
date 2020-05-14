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
  project$: Observable<Project>;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.project$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        console.log(params);
        return this.projectService.getProject(params.get("id"));
      })
    );

    this.project$.subscribe((project) => console.log("project", project));
  }
}

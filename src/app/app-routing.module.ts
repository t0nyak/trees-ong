import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ShopComponent } from "./components/shop/shop.component";
import { TransparencyComponent } from "./components/transparency/transparency.component";
import { ProjectSingleComponent } from "./components/project-single/project-single.component";

const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: "projects/:id",
    component: ProjectSingleComponent
  },
  {
    path: "shop",
    component: ShopComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "transparency",
    component: TransparencyComponent
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

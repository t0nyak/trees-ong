import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ShopComponent } from "./components/shop/shop.component";

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
    path: "shop",
    component: ShopComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "transparency",
    component: ProjectsComponent
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

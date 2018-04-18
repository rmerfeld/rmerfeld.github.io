import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AboutMeComponent } from "./about-me/about-me.component";
import { ImpressumComponent } from "./impressum/impressum.component";

const routes: Routes = [
  { path: "", redirectTo: "about-me", pathMatch: "full" },
  { path: "about-me", component: AboutMeComponent },
  { path: "impressum", component: ImpressumComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

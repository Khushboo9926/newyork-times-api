import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtComponent } from './art/art.component';
import { HomeComponent } from './home/home.component';
import { ScienceComponent } from './science/science.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { UsComponent } from './us/us.component';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "searchresult",
    component: SearchResultComponent
  },
  {
    path: "art",
    component: ArtComponent
  },
 
  {
    path: "science",
    component: ScienceComponent
  },
  {
    path: "us",
    component: UsComponent
  },
  {
    path: "world",
    component: WorldComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

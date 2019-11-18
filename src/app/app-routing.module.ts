import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {NewsComponent} from "./pages/news/news.component";
import {PostComponent} from "./pages/post/post.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
// import {AboutComponent} from "./pages/about/about.component";


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'news/:id', component: NewsComponent, children: []},
  {path: 'post/:id', component: PostComponent},
  {path: 'about', loadChildren: './pages/about/about/about.module#AboutModule'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

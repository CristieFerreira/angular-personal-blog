import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home', // redireciona pro home caso a pessoa entre pelo localhost sem colocar home
    pathMatch :'full'
  },
  {
    path: 'home', // o mesmo, porém a pessoa já digitou home
    component: HomeComponent
  },
  {
    path: 'feed', // caminho para o feed
    component: FeedComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

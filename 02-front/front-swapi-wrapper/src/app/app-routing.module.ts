import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwapyQueriesComponent } from './swapy-queries/swapy-queries.component';

const routes: Routes = [
  { path: 'home', component: SwapyQueriesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

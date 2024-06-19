import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeComponent } from './me/me.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'me',
    component: MeComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  { path: '', redirectTo: 'me', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

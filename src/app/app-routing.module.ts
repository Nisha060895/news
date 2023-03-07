import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorHandleComponent } from 'src/components/error-handle/error-handle.component';
import { HomeComponent } from 'src/components/home/home.component';
import { MainLayoutComponent } from 'src/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: '**',
        component: ErrorHandleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

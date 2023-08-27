import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout/layout.component';
import { LayoutModule } from './pages/layout/layout.module';


const routes: Routes = [
  { path: '', component:LayoutComponent,loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{scrollPositionRestoration: 'top'}),
    LayoutModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }

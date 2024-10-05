import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InbuiltComponent } from './inbuilt/inbuilt.component';
import { CustomComponent } from './custom/custom.component';

const routes: Routes = [
  { path: '', redirectTo: 'inbuilt', pathMatch: 'full' },
  { path: 'inbuilt', component: InbuiltComponent },
  { path: 'custom', component: CustomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

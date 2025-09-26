import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthComponent } from './pages/health/health';

const routes: Routes = [
  { path: 'health', component: HealthComponent },
  { path: '', pathMatch: 'full', redirectTo: 'health' },
  { path: '**', redirectTo: 'health' } // opzionale: catch-all
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
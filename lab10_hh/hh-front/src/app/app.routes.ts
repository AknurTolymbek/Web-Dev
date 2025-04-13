import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';

export const routes: Routes = [
  { path: '', component: CompanyListComponent },
  { path: 'company/:id', component: CompanyVacanciesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

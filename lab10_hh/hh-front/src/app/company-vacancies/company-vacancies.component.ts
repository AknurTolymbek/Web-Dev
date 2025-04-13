import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { VacancyService } from '../services/vacancy.service';
import { Vacancy } from '../models/vacancy';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  imports: [
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent implements OnInit {
  vacancies: Vacancy[] = [];
  companyId!: number;

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService
  ) { }

  ngOnInit(): void {
    this.companyId = +this.route.snapshot.paramMap.get('id')!;
    this.vacancyService.getCompanyVacancies(this.companyId).subscribe(
      vacancies => this.vacancies = vacancies,
      error => console.error('Error fetching vacancies:', error)
    );
  }
}

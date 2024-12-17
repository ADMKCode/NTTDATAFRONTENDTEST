import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-summary-screen',
  standalone: true,
  imports: [],
  templateUrl: './summary-screen.component.html',
  styleUrl: './summary-screen.component.css'
})
export class SummaryScreenComponent implements OnInit {

  documentType: string = '';
  documentNumber: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.documentType = params['type'];
      this.documentNumber = params['number'];
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

}

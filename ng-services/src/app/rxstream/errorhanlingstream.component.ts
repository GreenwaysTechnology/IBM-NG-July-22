import { Component, OnInit } from '@angular/core';
import { ErrorhanlingService } from './errorhanling.service';

@Component({
  selector: 'app-errorhanlingstream',
  templateUrl: './errorhanlingstream.component.html',
  styles: [
  ]
})
export class ErrorhanlingstreamComponent implements OnInit {
  constructor(private errorHandler: ErrorhanlingService) { }

  ngOnInit(): void {
    this.errorHandler.handleError().subscribe({
      next: data => console.log('data',data),
      error: err => console.log(err),
      complete: () => console.log('done')
    })
  }

}

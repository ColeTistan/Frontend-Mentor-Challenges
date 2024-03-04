import { Component } from '@angular/core';
import { AdviceApiService } from './advice-api.service';
import { Advice } from './advice.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Advice Generator (Angular)';
  public advice = new Advice('', '');
  constructor(private adviceApiService: AdviceApiService) {
    this.getAdvice();
  }

  getAdvice(): void {
    let adviceData;
    this.adviceApiService.getAdvice().subscribe((data: any) => {
      adviceData = data.slip;
      this.advice = new Advice(adviceData.id, adviceData.advice);
    });
  }
}

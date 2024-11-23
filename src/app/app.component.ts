import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QuestionGeneratorComponent } from './question-generator/question-generator.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule,QuestionGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dailydrill';
  isLoggedIn = false;

  logout(){
  }
}

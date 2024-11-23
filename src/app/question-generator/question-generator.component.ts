import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OpenAiService } from '../../services/open-ai-integration.service';

@Component({
  selector: 'app-question-generator',
  imports: [FormsModule,CommonModule],
  templateUrl: './question-generator.component.html',
  styleUrl: './question-generator.component.scss'
})
export class QuestionGeneratorComponent {
  topics = ['DSA', 'Angular', 'Java', 'Python'];
  selectedTopic = 'DSA';
  question = '';

  constructor(private openAiService: OpenAiService) {}

  async getQuestion() {
    this.question = 'Generating...';
    try {
      this.question = await this.openAiService.generateQuestion(this.selectedTopic);
    } catch (error) {
      this.question = 'Failed to generate question. Please try again.';
      console.error(error);
    }
  }
}
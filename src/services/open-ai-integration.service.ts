import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../app/keys/environmen';


@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  constructor() {}

  async generateQuestion(topic: string): Promise<string> {
    try {
      const response = await axios.post(
        this.apiUrl,
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are an assistant who generates educational questions.',
            },
            {
              role: 'user',
              content: `Generate a advanced-level question on the topic "${topic}". Include the question, answer, and a brief explanation.`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${environment.openaiApiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const question = response.data.choices[0].message.content;
      return question;
    } catch (error) {
      console.error('Error generating question:', error);
      throw new Error('Failed to generate question.');
    }
  }
}
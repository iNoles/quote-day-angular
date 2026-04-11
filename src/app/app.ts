import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface ZenQuote {
  q: string; // quote text
  a: string; // author
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  quote = signal<{ content: string; author: string } | null>(null);
  isLoading = signal(false);

  // store last used ID to prevent repeats
  private lastId: number | null = null;

  constructor(private http: HttpClient) {
    this.getQuote();
  }

  getQuote() {
    this.isLoading.set(true);

    // generate a random ID between 1 and 1454
    let randomId = Math.floor(Math.random() * 1454) + 1;

    // avoid repeating the same quote twice
    while (randomId === this.lastId) {
      randomId = Math.floor(Math.random() * 1454) + 1;
    }

    this.lastId = randomId;

    this.http
      .get<{ id: number; quote: string; author: string }>(
        `https://dummyjson.com/quotes/${randomId}`
      )
      .subscribe({
        next: data => {
          this.quote.set({ content: data.quote, author: data.author });
          this.isLoading.set(false);
        },
        error: () => {
          this.isLoading.set(false);
        }
      });
  }

  safeEncode(text: string) {
    return encodeURIComponent(text);
  }
}

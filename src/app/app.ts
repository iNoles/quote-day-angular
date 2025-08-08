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

  constructor(private http: HttpClient) {
    this.getQuote();
  }

  getQuote() {
    this.isLoading.set(true);
    this.http.get<ZenQuote[]>('https://zenquotes.io/api/today')
      .subscribe(data => {
        if (data && data.length > 0) {
          this.quote.set({
            content: data[0].q,
            author: data[0].a
          });
        }
        this.isLoading.set(false);
      });
  }

  safeEncode(text: string) {
    return encodeURIComponent(text);
  }
}

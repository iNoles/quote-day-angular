# quote-day-angular

A simple Angular standalone app that displays a **Quote of the Day** fetched from the ZenQuotes API.  
Includes a loading spinner, a button to fetch new quotes, and a “Tweet This” share feature.

---

## Features

- Fetches the daily quote from [ZenQuotes API](https://zenquotes.io/api/today)
- Displays quote text and author
- Loading indicator while fetching
- Tweet the current quote with a single click
- Built with Angular standalone components (Angular 16+)
- Styled with Bootstrap 5

---

## Demo

*Add your live demo URL here (e.g., GitHub Pages)*

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/quote-day-angular.git
   cd quote-day-angular
   ```
2. Install dependencies:

  ```bash
  npm install
  ```
3. Run the development server:

```bash
ng serve
```
4. Open your browser at http://localhost:4200

---

### Deployment
You can deploy this app easily to GitHub Pages:

Build the app:

```bash
ng build --base-href=/quote-day-angular/
```
Deploy using angular-cli-ghpages:

```bash
npx angular-cli-ghpages --dir=dist/quote-day-angular
```

### Notes

- The app uses the ZenQuotes public API. Be aware of rate limits and attribution requirements: https://zenquotes.io/
- For local development, you might need to configure CORS proxy or use a different API if you encounter CORS errors.

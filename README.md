# Dr. Umakant Butkar – Academic Website

Cleaned and organized website files.

## Files
- `index.html` – main academic profile
- `publications.html` – books, patents and research output
- `style.css` – shared styling
- `script.js` – shared interactions and live book-cover loading
- `profile.jpg` – profile image

## Book covers
The publication page uses the ISBNs already present in the supplied website.
It loads covers from Open Library and falls back to Google Books when available.
Amazon/publisher links remain available for purchasing/reference.

## Notes
The publication records were checked for exact duplicate book and patent entries.
No exact duplicates were found in the supplied publication database, so distinct
records were preserved rather than silently deleting potentially separate patents.

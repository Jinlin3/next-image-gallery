# Information
This website was creating following [Coding in Flow's Tutorial](https://www.youtube.com/watch?v=fqfer6xMp2A&t=2574s) on NextJS.
## Notes
* App Router comes with only 2 default pages: page.tsx and layout.tsx
* page.tsx = old index.tsx
* layout.tsx = old _app.tsx and _document.tsx combined into one (this is where you can add styling to the entire page such as fonts and navbars)
* to create a new route: create a folder within the app folder and set the folder name to the route name, then create a page.tsx file within it
* every component is server-side by default; to change it to client-side, add the "use client" directive at the top of the page (this applies to all child components as well)

## Special pages/files
* error.tsx: old 500 page (must be client-side)
* not-found.tsx: old 404 page
* loading.tsx: default loading page that displays

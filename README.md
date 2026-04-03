# Normandy Shores HOA – Work Request Portal

A client-side React web application where residents can submit work requests to the **Normandy Shores HOA**. Built with **React**, **Tailwind CSS**, and **Vite**. Deployed to **GitHub Pages** via a GitHub Actions workflow.

## Features

- 📋 **Submit Work Requests** – Fill out a form with contact info, category, priority, location, and description.
- ✅ **Confirmation Page** – See a summary of your submitted request with a reference ID.
- 📁 **My Requests** – View all previously submitted requests (stored in `localStorage`).
- 🏠 **Home Page** – Landing page with category quick-access and how-it-works overview.
- 📱 Fully responsive layout.

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 | UI framework |
| Tailwind CSS v4 | Utility-first styling |
| Vite | Build tool |
| GitHub Actions | CI/CD |
| GitHub Pages | Hosting |

## Project Structure

```
src/
  components/
    Header.jsx       # Top navigation bar
    Footer.jsx       # Footer with emergency contact
  pages/
    HomePage.jsx     # Landing page
    WorkRequestForm.jsx  # Work request submission form
    SuccessPage.jsx  # Post-submission confirmation
    RequestsPage.jsx # List of submitted requests
  App.jsx            # Root component with page routing & localStorage
  main.jsx           # React entry point
  index.css          # Tailwind CSS import
.github/
  workflows/
    deploy.yml       # GitHub Pages deployment workflow
```

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Push to the `main` branch to trigger the GitHub Actions workflow which builds and deploys the app to GitHub Pages.

> **Note:** GitHub Pages must be configured to use **GitHub Actions** as the source in the repository settings (`Settings → Pages → Source → GitHub Actions`).

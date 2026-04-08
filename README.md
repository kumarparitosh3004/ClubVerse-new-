# CLUBVERSE

ClubVerse is a full-stack institutional clubs portal designed for VIT students. It helps users explore clubs, view detailed information, access social media handles, mark favorite clubs, and browse major events associated with each club.

---

## Overview

This project is built as a student-focused discovery platform for official VIT clubs and chapters. It provides a centralized system where students can easily browse, search, and connect with different communities.

The website includes:

- A branded landing page  
- Club listing cards with logos, descriptions, and social links  
- Individual club detail pages  
- Top events and extended club information  
- Favorite club support using browser local storage  
- Responsive layouts for desktop and mobile  

---

## Tech Stack

### Frontend
- React 18  
- React Router DOM  
- HTML, CSS, JavaScript  
- Font Awesome  

### Backend
- Node.js  
- Express.js  
- REST API architecture  
- JSON-based data storage  

### Build Tool
- Create React App (react-scripts)

---

## Project Structure
clubverse/
├── public/
│ ├── index.html
│ └── manifest.json
├── src/
│ ├── assets/
│ │ ├── clubs/
│ │ └── vit-logo.png
│ ├── components/
│ │ ├── ClubList.js
│ │ ├── ContactForm.js
│ │ └── Navbar.js
│ ├── data/
│ ├── pages/
│ │ └── ClubDetails.js
│ ├── App.css
│ ├── App.js
│ ├── index.css
│ └── index.js
├── backend/
│ ├── data/
│ │ └── clubs.json
│ ├── routes/
│ │ └── clubs.js
│ ├── server.js
│ ├── package.json
│ └── package-lock.json
├── package.json
├── package-lock.json
└── README.md

---

## Main Features

- Landing page with institutional branding and hero section  
- Club filtering by category (Tech, Cultural, Arts, NGO)  
- Search bar for quick club lookup  
- Club cards with:
  - club logo  
  - short description  
  - social media links  
  - favorite toggle  
  - detail page navigation  
- Club detail pages with:
  - detailed information  
  - top events  
  - social media access  
  - favorite option  

---

## Backend Integration

The frontend communicates with the backend using REST APIs.

The backend serves club data from a JSON file and handles API requests such as:

- `GET /api/clubs` → fetch all clubs  
- `GET /api/clubs/:id` → fetch specific club details  

This makes the application dynamic and scalable.

---

## Data Source Design

All club-related content is managed by the backend in:
backend/data/clubs.json

Each club object includes:

- id  
- name  
- category  
- description  
- image  
- socialMedia  
- details  
- events  

The frontend fetches this data dynamically through API calls.

---

## Requirements

Before running the project, make sure you have:

- Node.js (v18 or newer recommended)  
- npm installed  

To check:
node -v
npm -v

---

## Installation

Clone the repository and install dependencies:
npm install

---

## How To Run

### Start Backend
cd backend
npm install
node server.js

### Start Frontend
npm install
npm start

The app will run at:
http://localhost:3000/

---

## Available Scripts

In the project directory, you can run:

- `npm start` → Runs the app in development mode  
- `npm run build` → Builds the app for production  
- `npm test` → Runs tests  
- `npm run eject` → Ejects CRA configuration (not required)  

---

## How Favorites Work

Favorite clubs are stored using browser localStorage.

- Favorites persist across refreshes  
- No backend database is required  
- Clearing browser storage will remove saved favorites  

---

## Routing

The application uses:

- `/` → Landing page and club listing  
- `/club/:id` → Individual club detail page  

---

## Styling Notes

The project uses custom CSS without any UI framework.

Main styling files:

- `src/App.css`  
- `src/index.css`  

Design includes:

- modern institutional theme  
- glassmorphism-inspired hero section  
- dark-themed club cards  
- responsive layouts  

---

## Assets

- Club logos: `src/assets/clubs`  
- VIT logo: `src/assets/vit-logo.png`  

---

## Customization

To add or update clubs:

1. Open `backend/data/clubs.json`  
2. Edit or add a new club object  
3. Save the file  
4. Refresh the application  

---

## Future Improvements

- Add database integration (MongoDB / SQL)  
- Implement authentication system  
- Add admin dashboard for club management  
- Include event registration features  
- Improve image optimization  
- Add automated testing  

---

## Notes

- The project is built as a full-stack application  
- Backend currently uses JSON as a lightweight database  
- Social links are based on available club information  

---

## Authoring Context

This project was created as a VIT institutional clubs portal concept to help students explore organizations, events, and official social handles from one unified platform.

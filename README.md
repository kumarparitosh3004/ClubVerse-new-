# CLUBVERSE

CLUBVERSE is a full-stack institutional clubs portal designed for VIT students. It helps users explore clubs, view detailed information, access social media links, mark favorite clubs, and browse major events associated with each club.

---

## Overview

This project is built as a student-focused discovery platform for official VIT clubs and chapters. It provides a centralized system where users can:

- Explore all clubs in one place  
- View detailed club information and events  
- Filter and search clubs based on interests  
- Connect with clubs through social links  
- Mark favorite clubs for quick access  

The platform follows a **full-stack architecture**, combining a React frontend with a Node.js and Express backend.

---

## Tech Stack

### Frontend:
- React 18  
- React Router DOM  
- HTML, CSS, JavaScript  
- Font Awesome  

### Backend:
- Node.js  
- Express.js  
- REST APIs  

### Data:
- JSON (clubs.json)  

### Build Tool:
- Create React App (react-scripts)  

---

## Project Structure
## Project Structure

```text
clubverse/
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── clubs/
│   │   │   └── vit-logo.png
│   │   │
│   │   ├── components/
│   │   │   ├── ClubList.js
│   │   │   ├── ContactForm.js
│   │   │   └── Navbar.js
│   │   │
│   │   ├── pages/
│   │   │   └── ClubDetails.js
│   │   │
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   │
│   └── package.json
│
├── backend/
│   ├── data/
│   │   └── clubs.json
│   │
│   ├── routes/
│   │   └── clubs.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```


---

## Main Features

- Branded landing page with hero section  
- Club listing cards with:
  - Logo  
  - Description  
  - Social media links  
  - Favorite toggle  
- Search functionality  
- Category-based filtering  
- Individual club detail pages with:
  - Detailed information  
  - Events section  
  - Social links  
- Contact form  
- Responsive design for all devices  

---

## Current Club Categories

- Tech  
- Cultural  
- Arts  
- NGO  

---

## Backend API

The backend provides REST APIs for fetching club data.

### Endpoints:

- `GET /api/clubs`  
  → Returns all clubs  

- `GET /api/clubs/:id`  
  → Returns details of a specific club  

---

## How It Works

1. Frontend sends request to backend API  
2. Backend reads data from `clubs.json`  
3. Backend sends response in JSON format  
4. Frontend renders data dynamically  

---

## Data Source Design

All club-related data is stored in:
backend/data/clubs.json


Each club object contains:

- id  
- name  
- category  
- description  
- image  
- socialMedia  
- details  
- events  

---

## How Favorites Work

Favorite clubs are stored using **browser localStorage**.

- Favorites persist after page refresh  
- Stored only in browser (no backend storage)  
- Clearing browser storage will remove saved favorites  

---

## Routing

### Frontend Routes:

- `/` → Homepage (club listing)  
- `/club/:id` → Club details page  

---

## Requirements

- Node.js (v18 or above recommended)  
- npm installed  

Check using:
node -v
npm -v


---

## Installation

### 1. Clone the repository
git clone <your-repo-link>
cd clubverse

---

### 2. Install dependencies

Frontend:

cd frontend
npm install


Backend:

cd backend
npm install


---

## Running the Project

### Start Backend Server:

cd backend
node server.js


Runs on:

http://localhost:5000


---

### Start Frontend:

cd frontend
npm start


Runs on:

[http://localhost:3000](http://localhost:3000)


---

## Styling Notes

- Custom CSS (no framework used)  
- Responsive layouts  
- Glassmorphism UI effects  
- Dark-themed cards  

---

## Assets

- Club logos: `src/assets/clubs/`  
- VIT logo: `src/assets/vit-logo.png`  

---

## Future Improvements
- Database integration (MongoDB / Firebase)  
- User authentication  
- Admin dashboard for managing clubs  
- Event registration system  
- Real-time updates  
- Image optimization  
- Automated testing  

---

## Notes

- Full-stack project with API-based architecture  
- Backend currently uses JSON (can be replaced with database)  
- Designed for scalability and future enhancements  

---

## Authoring Context

This project was created as a VIT institutional clubs portal to help students explore clubs, events, and official communities from one centralized platform.

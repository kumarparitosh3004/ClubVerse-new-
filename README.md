# CLUBVERSE

CLUBVERSE is a React-based institutional clubs portal designed for VIT students. It helps users explore clubs, view club-specific details, access social media handles, mark favorite clubs, and browse major events associated with each club.

## Overview

This project is built as a student-focused discovery platform for official VIT clubs and chapters. The website includes:

- A branded landing page
- Club listing cards with logos, descriptions, and social links
- Individual club detail pages
- Top events and extended club information
- Favorite club support using browser local storage
- Responsive layouts for desktop and mobile

## Tech Stack

- Frontend: React 18
- Routing: React Router DOM
- Styling: Plain CSS
- Icons: Font Awesome
- Build toolchain: Create React App (`react-scripts`)

## Project Structure

```text
VitXCC-new/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── assets/
│   │   ├── clubs/
│   │   └── vit-logo.png
│   ├── components/
│   │   ├── ClubList.js
│   │   ├── ContactForm.js
│   │   └── Navbar.js
│   ├── data/
│   │   └── clubs.js
│   ├── pages/
│   │   └── ClubDetails.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
└── README.md
```

## Main Features

- Landing page with institutional branding and hero section
- Club filtering by category
- Search bar for club lookup
- Club cards with:
  - club logo
  - short description
  - connect-with-us social buttons
  - favorite toggle
  - detail page access
- Club detail pages with:
  - larger logo area
  - detailed information section
  - top events section
  - connect-with-us section
  - favorite action

## Current Club Categories

- Tech
- Cultural
- Arts
- NGO

## Data Source Design

All club-related content is currently stored in:

[`src/data/clubs.js`](/Users/paritosh/Desktop/project%20webdev/VitXCC-new/src/data/clubs.js)

Each club object includes:

- `id`
- `name`
- `category`
- `description`
- `image`
- `socialMedia`
- `details`
- `events`

This makes it easy to extend the site later without changing the page structure.

## Requirements

Before running the project, make sure you have:

- Node.js 18 or newer recommended
- npm installed

To check:

```bash
node -v
npm -v
```

## Installation

Clone the project and install dependencies:

```bash
npm install
```

## How To Run

Start the development server:

```bash
npm start
```

This will open the app in development mode, usually at:

[http://localhost:3000](http://localhost:3000)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.

### `npm run build`

Builds the app for production into the `build/` folder.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run eject`

Ejects the Create React App configuration. This is irreversible and generally not needed for this project.

## How Favorites Work

Favorite clubs are stored in the browser using `localStorage`.

This means:

- favorites persist across refreshes in the same browser
- favorites are not stored in a backend database
- clearing browser storage will remove saved favorites

## Routing

The website currently uses two main routes:

- `/` for the landing page and club listing
- `/club/:id` for each club detail page

## Styling Notes

The project uses custom CSS without a UI framework. Main styling lives in:

- [src/App.css](/Users/paritosh/Desktop/project%20webdev/VitXCC-new/src/App.css)
- [src/index.css](/Users/paritosh/Desktop/project%20webdev/VitXCC-new/src/index.css)

The current design includes:

- a professional institutional theme
- glassmorphism-inspired hero styling
- dark club cards
- responsive club detail layouts

## Assets

Club logos are stored locally under:

[`src/assets/clubs`](/Users/paritosh/Desktop/project%20webdev/VitXCC-new/src/assets/clubs)

The main VIT logo used in branding is stored at:

[`src/assets/vit-logo.png`](/Users/paritosh/Desktop/project%20webdev/VitXCC-new/src/assets/vit-logo.png)

## Customization

To add or update clubs:

1. Open [src/data/clubs.js](/Users/paritosh/Desktop/project%20webdev/VitXCC-new/src/data/clubs.js)
2. Edit the relevant club object
3. Update the logo inside [`src/assets/clubs`](/Users/paritosh/Desktop/project%20webdev/VitXCC-new/src/assets/clubs) if needed
4. Save the file and refresh the browser

## Suggested Future Improvements

- Add a backend or CMS for club data management
- Add authentication for admin content updates
- Add club coordinators and contact persons
- Add event dates and registration links
- Add better image optimization
- Add automated tests

## Notes

- This project is currently frontend-focused
- Club descriptions, details, and social links are manually maintained in the data file
- Some external social/media links point to club-provided pages or shared reference links

## Authoring Context

This project was created as a VIT institutional clubs portal concept to help students explore organizations, events, and official social handles from one place.

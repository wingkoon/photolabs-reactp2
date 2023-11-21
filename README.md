# Photolabs
PhotoLabs is a React-based single-page application (SPA) that allows users to view and favorite photos.

#### Default landing page.
![landing-page](docs/landing-page.png)

#### Main viewer when photos are favorited.
![fav-photos](docs/fav-photos.png)

#### Modal viewer when a photo is clicked.
![open-modal](docs/open-modal.png)

#### Suggested similar photos in the modal viewer.
![similar-photos](docs/similar-photos.png)

## Features
1. A user can view photos from the homepage loaded from the API.
2. The user can navigate to different photo categories, also called topics.
3. The user can click on a photo to view a larger version of the photo and relevant / similar photos.
4. The user can like a photo from anywhere within the application where the photo is displayed.
5. The user can view a heart icon with a notification in the navigation if there are liked photos.
6. The navigation will consist of different topics and heart icon.
7. The client-side application will make API requests to load and persist data (i.e. relevant data is not lost after a session restarts, so after a browser refresh).

## Tech Stack
### Frontend
- React.js
- Sass

### Backend
- Node.js
- PostgreSQL
- Express

## Setup
To run this project locally follow these steps:

1. Clone the repository:
```sh
git clone https://github.com/linkwithlionhart/photolabs-react
```

2. Navigate to the project directory:
```sh
cd your-repo-name
```

3. Install dependencies with `npm install` in each respective `/frontend` and `/backend`.
```sh
npm install
```

## [Frontend] Running Webpack Development Server
Read `frontend/readme` for further setup details.
```sh
cd frontend
npm start
```

## [Backend] Running Backend Server
Read `backend/readme` for further setup details.
```sh
cd backend
npm start
```

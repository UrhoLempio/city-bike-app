# Solita 2024 Dev Academy Pre-Assignment - City Bike App
This project provides a UI and backend service for fetching data from a docker container where the PostgreSQL database is run. In the resulting web application we can see the full station list with links to single station views. In a single station view all departures and returns from and to the selected station can be viewed. In addition the requested total departures, returns, and average durations of the journeys are listed.

## Install, build, and run instructions
Assuming running provided Docker container with database in port 5432
### Backend
In the backend folder:
- Run `npm install` to install dependencies.
- Run `npx tsc` to build the backend.
- Run `node dist/app.js` to start it.

### Frontend
In the frontend folder:
- Run `npm install`
- Run `npm run dev` to build and start it

## Dependencies
Look up package.json.

## Project structure
The project is divided to backend and frontend.
### Backend
Located in `app.ts`.
With express get requests and sql queries we fetch the data from the docker container.
### Frontend
Structure is divided into components, pages, and api.
In the components folder the different components seen on the page are rendered using mui components.


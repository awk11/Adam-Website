# Adam Kaufman's Personal Website

Welcome to the README for my personal website's repository! The code is structured in to a few sections. 

The front end was built using Vue 3, with Bootstrap 5 as the base UI framework. It's code can be found in the Adam-Website folder. 

The back end is a NodeJS and ExpressJS API, connecting to some JSON files that act as a makeshift database (actual db's are expensive to host). This can all be found in the Node-Server folder.

Lastly there's the MediaBucket folder, which acts as my mock file bucket to pull all of the various media i use throughout the site.

## Structure

This site is structured as a single page application. Everything public facing goes through the HomeView, with different sections split up into various companents, along with smaller components for things like the project tiles under experience, as well as the modal for popups. There is also a utility component section for things like the error modal and a loading spinner used while content is waiting on a back end call.


The file structure for the front end follows a standrd vue project layout, with folders for views, components, scripts, etc. There are alos component subfolders for things like projects and utilities. 

For the back end, the api is all organized into the index.js file and connects with the json files in jsonDB.

The MediaBucket folder is where all images and videos w=throughout the site are stored and pulled from. The folder is connected to the front end project and compiled along with the project on npm run build using vite.

## Build and run

To run a local version of the site use the following commands:

cd Adam-Wesbite
npm run dev

To run a local version of the back end, run:

cd Node-Server
node index.js

To build the site for production:
cd Adam-Website
npm run build
# React Flicker Gallery
A simple react based image gallery - using flickr API

## installation
1. Clone or download repository to your prefered location (You will need to have 'git' installed)
2. Install dependencies using npm:
```
npm install
```
3. When installation is done, run the appusing:
```
npm start
```
4. A new node server will be created on port 8080, you can view the app on the browser on 'localhost:8080'

## Directions
The app will be showing 3 images by default and a blue header with 5 buttons
* The first button from the left is the search button, when you click on it a text field will open and you will be able to doa search.
* The second and the third buttons from the left, are the gallery type swicher. The default gallery is by pages, the second gallery with the grid icon is the infinite scroll gallery.
* The forth button, when click will open a menu where you can set the number of images to showe on each page.
* The fifth button, when clicked will open a menu that will allow you to add/delete tags. 

### Regular gallery
The regaular gallery simply loads a certain amount of images for each page. The regular gallery has paganation on the bottom. 

### Infinite scroll gallery
The infinaite scroll (havan't been checked on all resolutions) show grid of images from top to bottom and each time the user scrolls doen additonal images will be added and so on.

## Limitations
Currently in order for any images to be shown at least 1 tag or search phrase must be included.

## Responsiveness
The app is responsive and meant to be used by desktop or mobile screen

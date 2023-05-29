# Project name and purpose

"Sklep strojów klubowych" is an initial-stage demo of future e-commere web app for Stowarzyszenie Slow Jogging Polska

This is a vanilla JS project as final project during WSB postgraduate studies.

## Technologies used

This project was performed using HTML, CSS and JS.

## Development server

You can use live server build in VSC or npm.
Files are also hosted on Netlify at https://project-js-sklep-ubran-sport-aw.netlify.app/

### Project walk around

This is an initial stage. In index.html and coressponding css I prepared places for future features.
At this stage I prepared 2 product lists in 2 categories: "Koszulka Run Sympatyk Witalny" and "Wiatrówka Sympatyk Witalny".
Products are strored as array of objects in products.js file as "database" and rendered at front page (index.html) using
function renderKoszulki() and renderWiatrowki() with forEach method.

User can chose product item and place it in a cart section using button "KUP TERAZ". The amount of items in cart is updated
when clicking on button "KUP TERAZ" or increasing and decreasing amount in cart. User can also delete an item using X-icon in cart.
During these oparations subtotal amount is updated.

Products in cart array are strored in local storage obcject using method setItem and stringify to save array
and getItem and JSON.parse to load saved cart array.

There are still many products and functionalities to be added and I will work on them during futher learning of JS.

I decided to add PostgreSQL, express, TypeORM to the react project.

Now it was a slight mess, as I really struggled understanding why so many things failed
despite majority of stuff working fine in a barebone independant project as in NO FRONT END,
while express was OKAY as in the basic ideas of get, post, res, req and next was fine
it was when I had to introduce TypeORM and PostgreSQL that all went south.
I had to stick with js for the server itself (oh btw i used nodemon) while for the entities I used typescript
To be completely honest I used Typescript a lot more on my senior React Native project than here.
so I wasn't sure if I was expected to use .ts for server but it was just impossible
had a lot of issue related to ESM which is used by the front end while backend wanted commonjs
so all was a mess, had to instead stick with js for backend and for the entities I used ts
but compiled the ts entity file using tsc to get the js equivalent file.

do note I made it so backend listens to /api since it caused a LOT of issues when refreshing pages
in front end since for example refreshing /store if I used /store in backend, it would end up loading
the /store of the backend which was on port 3000 instead of the front end on port 5173

I didn't use redux here as it has no use for me now since I can directly fetch from database the needed data
do note I kept redux because I can use it for things like a shopping cart for example
but my apology I couldn't add said feature as I am finding it difficult to make time between my senior Univerisity Project and this project

a final note, I had some issues with encoding for the database as despite using utf-8 everywhere from the pshell to pgAdmin 4, it still had issues for some reason with apostrophes, I eventually fixed it by just performing queries on pgAdmin4 rather than the pshell

PS: I used "npm run dev" for front end the on a diff terminal "npm run devStart" for backend

README from project 2 below,

This project is basically the port from my project 1 that used html, css and JS to React and Tailwindcss.

For the build tool I used Vite.

React Router was used for routing in this project, therefore allowing us to have a single page application. In other words everything is being ran on 1 page.

Tailwindcss was used for the design of the project.

All products information and images were taken from amazon.com

This project is based on E-commerce site where you can browse products (only 15 products) and check their informations and place orders

Now placing orders doesn't exactly do anything aside from showing a popup mentioning that you placed an order

I have done tests to make this work on both PCs and mobile phones (I mainly used an iPhone 16)

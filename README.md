# pokeapi-project
This Pokemon app is made with Next.js, Tailwind CSS, and PokeAPI. The web application shows pokemons and their data. All pokemons have more information in thier individual pages. The pokemons can also be selected for favourites and are shown in the Favourites page. 

To run this project in your local machine:

- Install Node.js
- Downlaod the zip file of the project
- Run `npm install` to install the dependencies for the project 
- Run `npm run dev` to run in developers mode
- Run `npm run build` to build the application for production
- Run `npm run start` to run the built application.

**Note: Running this project in developers mode takes a lot of time as around 720-725 pokemon data's API links have been fetched. To reduce the number of pokemons, go to index.js, and change the argument value (which is the number of pokemon data to be fetched) in `await getPokemonDetails(721)` in `getStaticProps()` **

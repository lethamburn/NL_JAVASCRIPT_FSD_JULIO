const URL = "https://starwars-server.vercel.app/movies";

const container = document.querySelector("#container");
const myInput = document.querySelector("#searchbar");

//De manera global tengo una lista donde almacenar las peliculas fuera de cualquier función
let movieList;

const getMovies = async () => {
  const rawMovies = await fetch(URL);
  const jsonMovies = await rawMovies.json();
  const movies = jsonMovies.data.movies;
  mapMovies(movies);
};

const mapMovies = (movies) => {
  const mappedMovies = movies.map((movie) => ({
    title: movie.name,
    poster: movie.poster,
    year: movie.year,
  }));
  //Almaceno la info mapeada en mi array local de arriba
  movieList = mappedMovies;
  generateHTML(movieList);
};

const generateHTML = (mappedList) => {
//Cada vez que lo genero limpio el contenedor
    container.innerHTML = "";
    
  for (const item of mappedList) {
    const figure = `
    <figure>
    <h2>${item.title}</h2>
    <img src="${item.poster}" referrerpolicy="no-referrer" width="200px" />
    <h2>${item.year}</h2>
    </figure>
    `;
    paint(figure);
  }
};

const paint = (figure) => {
  container.innerHTML += figure;
};

getMovies();

const search = () => {
  const filteredMovies = movieList.filter((movie) =>
  //Esta es la condicion que filtra
    movie.title.toLowerCase().includes(myInput.value.toLowerCase())
  );
  console.log("filtered:", filteredMovies)
  generateHTML(filteredMovies)
};

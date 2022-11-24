const moviesList = document.getElementById("list");
const imdbUrl = "https://www.imdb.com/title/";

//maakt daadwerkelijk een list element van de gegeven film
function createItem(movie) {
    const li = document.createElement("li");
    const link = document.createElement("a");
    const image = document.createElement("img");

    image.setAttribute("src", movie.poster);
    link.setAttribute("href", imdbUrl + movie.imdbID);
    link.setAttribute("target", "_new");

    li.appendChild(link).appendChild(image);
    return li;
}

// Pakt films uit de database en maakt voor elke een list element in de container
function addMoviesToDom(movies) {
    const items = movies.map(createItem);

    items.forEach((item) => {
        moviesList.appendChild(item);
    });
}

addMoviesToDom(movies);

// radiobuttons event veranderen
const addEventListeners = function () {
    const radioBtns = document.querySelectorAll("film-filter");
    radioBtns.forEach((radio) =>
        radio.addEventListener("change", handleOnChangeEvent)
    );
};

addEventListeners();

function handleOnChangeEvent(event) {
    switch (event.target.value) {
        case "latest":
            filterLatestMovies(2014);
            break;
        case "avenger":
            filterMovies("avenger");
            break;
        case "x-men":
            filterMovies("x-Men");
            break;
        case "princess":
            filterMovies("princess");
            break;
        case "batman":
            filterMovies("batman");
            break;
    }
};

function filterMovies(wordInMovie) {
    let filterMovies = movies.filter((movie) => {
        if (movie.title.includes(wordInMovie)) {
            return movie;
        }
    });
}

addMoviesToDom(filterMovies);

const filterLatestMovies = movie.filter(year => {
    return movie.year = 2014
});

addMoviesToDom(filterLatestMovies);

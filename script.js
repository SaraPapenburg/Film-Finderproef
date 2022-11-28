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
    console.log("add to dom", movies)
    const items = movies.map(createItem);

    items.forEach((item) => {
        moviesList.appendChild(item);
    });
}

addMoviesToDom(movies);

// radiobuttons veranderen van event VOLGENS MIJ GAAT HET HIER NIET HELEMAAL GOED
function addEventListeners() {
    const radioBtns = document.getElementsByName("film-filter");
    console.log(radioBtns)
    radioBtns.forEach((container) =>
        container.addEventListener("change", handleOnChangeEvent)
    );
};

addEventListeners();


// filteren van de films, handleonchange wordt ingevoegd bij de eventlistener functie
function handleOnChangeEvent(event) {
    console.log(event.target.value)
    switch (event.target.value) {
        case "latest":
            console.log("latest1")
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

//filteren o.b.v. jaartal
//WERKT VOLLEDIG NAAR BEHOREN
function filterLatestMovies(year) {
    let filterYearMovies = movies.filter((movie) => {
        if (movie.year >= year) {
            return movie;
        }
    });
    removeLi();
    addMoviesToDom(filterYearMovies);
}

//filteren o.b.v. titel HIER GAAT ER IETS MIS, MAAR IK HEB GEEN IDEE MEER WAT
//MEERDERE CODES GEPROBEERD, IK KAN DE FOUT NIET VINDEN. ALLEEN ALS IK DE NAAM VAN DE BUTTON INVUL WERKT HET, ANDERS NIET
function filterMovies(wordInMovie) {
    let filterMovies = movies.filter((moviesList) => {
        console.log("movieList.title", moviesList.title)
        if (moviesList.title.includes("Batman")) {
            console.log("Zoeken naar:", moviesList.title)
            return wordInMovie;
        }
    });
    removeLi();
    addMoviesToDom(filterMovies);
}

//stap 11 ul leegmaken en gefilterde toevoegen
function removeLi() {
    while (moviesList.firstChild) {
        moviesList.removeChild(moviesList.firstChild);
    }
    console.log("only filtered movies show");
}







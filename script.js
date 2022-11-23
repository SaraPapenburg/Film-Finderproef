const ulList = document.querySelector("#list");

const addMoviesToDom = (movies) => {
    movies.map((movies) => {
        const newLi = document.createElement("li");
        newLi.innerHTML = movies.title;
        ulList.appendChild(newLi);
    });
};

addMoviesToDom(movies);
let path = "https://raw.githubusercontent.com/AlirezaKiaeipour/Website-Programming/main/Filmography/json/moviedata.json";
let select_year = document.getElementById("select");
let movies = [];
let years_array = [];
let title;
let row_section = document.getElementById("row-section");
let container = document.getElementById("container");
let container_head = document.getElementById("container-head");
let row_section_head = document.getElementById("row-section-head");
let container_search = document.getElementById("container-search");
let row_section_search = document.getElementById("row-section-search");


function show_year() {
    for (let i = 0; i < movies.length; i++) {
        years_array[i] = movies[i].year;
    }
    let years = [...new Set(years_array)];
    years.sort()
    for (let i = 0; i < years.length; i++) {
        let option = document.createElement("OPTION");
        option.innerHTML = years[i];
        option.value = years[i];
        select_year.appendChild(option);
    }
}

function show_movie() {
    for (let i = 0; i < 8; i++) {
        container_head.classList.add("container", "bg-warning", "my-4", "py-5", "rounded-4");
        row_section_head.classList.add("row", "px-4");
        let div1 = document.createElement("DIV");
        let div2 = document.createElement("DIV");
        let div3 = document.createElement("DIV");
        let image = document.createElement("IMG");
        let h5_name = document.createElement("H6");
        let p_year = document.createElement("P");
        let p_imdb = document.createElement("P");


        div1.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-3");
        row_section_head.appendChild(div1);

        div2.classList.add("card");
        div1.appendChild(div2);

        image.src = movies[i].info.image_url;
        image.classList.add("card-img-top", "img-fluid", "rounded-2");
        image.style.height = "400px";
        div2.appendChild(image);

        div3.classList.add("card-body");
        div2.appendChild(div3);

        h5_name.classList.add("card-title");
        h5_name.innerHTML = movies[i].title;
        p_year.classList.add("card-text");
        p_year.innerHTML = "Year: " + movies[i].year;
        p_imdb.innerHTML = "IMDB: " + movies[i].info.rating;
        div3.appendChild(h5_name);
        div3.appendChild(p_year);
        div3.appendChild(p_imdb);
    }
}

function movie_base_year(selected) {
    row_section.innerHTML = "";

    if (selected.value == "0") {
        container.style.display = "none";
        container_head.style.display = "block";
        container_search.style.display = "none";
    }
    else {
        container.style.display = "block";
        container_head.style.display = "none";
    }

    for (let i = 0; i < movies.length; i++) {
        if (movies[i].year == selected.value) {
            if (movies[i].info.rating && movies[i].info.image_url && movies[i].year) {
                container_search.style.display = "none";
                container.style.display = "block";
                container.classList.add("container", "bg-warning", "my-4", "py-5", "rounded-4");
                row_section.classList.add("row", "px-4");
                let div3 = document.createElement("DIV");
                let div4 = document.createElement("DIV");
                let div5 = document.createElement("DIV");
                let div6 = document.createElement("DIV");
                let div7 = document.createElement("DIV");
                let image = document.createElement("IMG");
                let span_modal_close = document.createElement("SPAN");
                let h5_modal_title = document.createElement("H5");
                let p_modal_year = document.createElement("P");
                let p_modal_imdb = document.createElement("P");
                let p_modal_genres = document.createElement("P");
                let p_modal_director = document.createElement("P");
                let p_modal_actors = document.createElement("P");
                let p_modal_plot = document.createElement("P");
                let h5_name = document.createElement("H6");
                let p_year = document.createElement("P");
                let p_imdb = document.createElement("P");

                div3.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-3");
                row_section.appendChild(div3);

                div4.classList.add("card");
                div3.appendChild(div4);

                div5.classList.add("modal");
                div5.id = "myModal";
                div4.appendChild(div5);

                image.src = movies[i].info.image_url;
                image.classList.add("card-img-top", "img-fluid", "rounded-2", "grayscale");
                image.onclick = function () { div5.style.display = "flex"; image.classList.remove("grayscale") };
                image.style.height = "400px";
                div4.appendChild(image);

                div6.classList.add("modal-content");
                div5.appendChild(div6);

                span_modal_close.classList.add("close");
                span_modal_close.onclick = function () { div5.style.display = "none"; };
                span_modal_close.innerHTML = "&times;";
                div6.appendChild(span_modal_close);

                h5_modal_title.innerHTML = "Title: " + movies[i].title;
                p_modal_year.innerHTML = "Year: " + movies[i].year;
                p_modal_imdb.innerHTML = "IMDB: " + movies[i].info.rating;
                p_modal_director.innerHTML = "Directors: " + movies[i].info.directors;
                p_modal_genres.innerHTML = "Genres: " + movies[i].info.genres;
                p_modal_actors.innerHTML = "Actors: " + movies[i].info.actors;
                p_modal_plot.innerHTML = "Plot: " + movies[i].info.plot;
                div6.appendChild(h5_modal_title);
                div6.appendChild(p_modal_year);
                div6.appendChild(p_modal_imdb);
                div6.appendChild(p_modal_director);
                div6.appendChild(p_modal_genres);
                div6.appendChild(p_modal_actors);
                div6.appendChild(p_modal_plot);

                div7.classList.add("card-body");
                div4.appendChild(div7);

                h5_name.classList.add("card-title");
                h5_name.innerHTML = movies[i].title;
                p_year.classList.add("card-text");
                p_year.innerHTML = "Year: " + movies[i].year;
                p_imdb.innerHTML = "IMDB: " + movies[i].info.rating;
                div7.appendChild(h5_name);
                div7.appendChild(p_year);
                div7.appendChild(p_imdb);
            }
            else {
                container.style.display = "none";
            }
        }
    }
}

function show_search() {
    row_section_search.innerHTML = "";
    container_head.style.display = "none";
    let search_box = document.getElementById("search_box").value.toUpperCase();
    for (let i = 0; i < movies.length; i++) {
        title = movies[i].title;
        title = title.toUpperCase();
        if (title.includes(search_box)) {
            if (movies[i].info.rating && movies[i].info.image_url && movies[i].year) {
                container.style.display = "none";
                container_search.style.display = "block";
                container_search.classList.add("container", "bg-warning", "my-4", "py-5", "rounded-4");
                row_section_search.classList.add("row", "px-4");
                let div3 = document.createElement("DIV");
                let div4 = document.createElement("DIV");
                let div5 = document.createElement("DIV");
                let div6 = document.createElement("DIV");
                let div7 = document.createElement("DIV");
                let image = document.createElement("IMG");
                let span_modal_close = document.createElement("SPAN");
                let h5_modal_title = document.createElement("H5");
                let p_modal_year = document.createElement("P");
                let p_modal_imdb = document.createElement("P");
                let p_modal_genres = document.createElement("P");
                let p_modal_director = document.createElement("P");
                let p_modal_actors = document.createElement("P");
                let p_modal_plot = document.createElement("P");
                let h5_name = document.createElement("H6");
                let p_year = document.createElement("P");
                let p_imdb = document.createElement("P");

                div3.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-3");
                row_section_search.appendChild(div3);

                div4.classList.add("card");
                div3.appendChild(div4);

                div5.classList.add("modal");
                div5.id = "myModal";
                div4.appendChild(div5);

                image.src = movies[i].info.image_url;
                image.classList.add("card-img-top", "img-fluid", "rounded-2", "grayscale");
                image.onclick = function () { div5.style.display = "flex"; image.classList.remove("grayscale") };
                image.style.height = "400px";
                div4.appendChild(image);

                div6.classList.add("modal-content");
                div5.appendChild(div6);

                span_modal_close.classList.add("close");
                span_modal_close.onclick = function () { div5.style.display = "none"; };
                span_modal_close.innerHTML = "&times;";
                div6.appendChild(span_modal_close);

                h5_modal_title.innerHTML = "Title: " + movies[i].title;
                p_modal_year.innerHTML = "Year: " + movies[i].year;
                p_modal_imdb.innerHTML = "IMDB: " + movies[i].info.rating;
                p_modal_director.innerHTML = "Directors: " + movies[i].info.directors;
                p_modal_genres.innerHTML = "Genres: " + movies[i].info.genres;
                p_modal_actors.innerHTML = "Actors: " + movies[i].info.actors;
                p_modal_plot.innerHTML = "Plot: " + movies[i].info.plot;
                div6.appendChild(h5_modal_title);
                div6.appendChild(p_modal_year);
                div6.appendChild(p_modal_imdb);
                div6.appendChild(p_modal_director);
                div6.appendChild(p_modal_genres);
                div6.appendChild(p_modal_actors);
                div6.appendChild(p_modal_plot);

                div7.classList.add("card-body");
                div4.appendChild(div7);

                h5_name.classList.add("card-title");
                h5_name.innerHTML = movies[i].title;
                p_year.classList.add("card-text");
                p_year.innerHTML = "Year: " + movies[i].year;
                p_imdb.innerHTML = "IMDB: " + movies[i].info.rating;
                div7.appendChild(h5_name);
                div7.appendChild(p_year);
                div7.appendChild(p_imdb);
            }
            else {
                container_search.style.display = "none";
            }
        }
    }
}

async function read_data(file) {
    let x = await fetch(file);
    let y = await x.text();
    movies = JSON.parse(y);
    show_year();
    show_movie();
}
read_data(path);

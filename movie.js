// http://www.omdbapi.com/?i=tt3896198&apikey=8c2c3920

async function getMovie() {
  let div = document.getElementById("movie-info");
  let movie = document.getElementById("movie").value;
  try {
    let res = await fetch(
      `https://www.omdbapi.com/?apikey=8c2c3920&t=${movie}`
    );
    let data = await res.json();
    if (data.Title === undefined) {
      div.innerHTML = null;
      div.style.flexDirection = "column";
      let gif = document.createElement("img");
      gif.src = "https://media.giphy.com/media/114X7S7MjUV1FS/giphy.gif";
      gif.style.width = "55%";
      gif.style.height = "65%";
      gif.style.paddingTop = "2%";
      gif.style.margin = "auto";
      let title = document.createElement("h2");
      title.innerHTML = "Such movie doesn't exist!";
      div.append(gif, title);
    } else {
      div.innerHTML = null;
      let img_div = document.createElement("div");
      let content_div = document.createElement("div");
      let img = document.createElement("img");
      img.src = data.Poster;
      let title = document.createElement("h2");
      title.innerHTML = data.Title;

      let year = document.createElement("p");
      year.innerHTML = "Year:   " + data.Year;
      let genre = document.createElement("p");
      genre.innerHTML = "Genre:   " + data.Genre;
      let director = document.createElement("p");
      director.innerHTML = "Director:   " + data.Director;
      let writer = document.createElement("p");
      writer.innerHTML = "Writer:   " + data.Writer;
      let awards = document.createElement("p");
      awards.innerHTML = "Awards:   " + data.Awards;
      let imdb = document.createElement("p");
      imdb.innerHTML = "IMDB Rating:   " + data.imdbRating + "/10";

      content_div.append(title, year, genre, imdb, director, writer, awards);
      img_div.append(img);
      div.append(img_div, content_div);
    }
  } catch {
    console.log("my error: ", err);
  }
}

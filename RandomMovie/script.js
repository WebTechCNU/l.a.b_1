// 5e8508dfd50d065f3a24baf246183b2e

output = document.getElementById('film');
overviewOutput = document.getElementById('overview-output');
button = document.getElementById('button');
year = document.getElementById('year');
poster = document.getElementById('poster');

function outputMovie(title, release_date, overview, poster_path) {
    output.innerHTML = title;
    year.innerHTML = release_date;
    overviewOutput.innerHTML = overview;
    poster.src = 'https://image.tmdb.org/t/p/w500' + poster_path;
}


button.addEventListener('click', function() {
    let itemId = 0;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTg1MDhkZmQ1MGQwNjVmM2EyNGJhZjI0NjE4M2IyZSIsInN1YiI6IjY1YmU5YTUzYTM1YzhlMDE3Y2Q0YWRkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tVL6gWmjp9yUO0wUm4G8fY45ZD56V98-mnHhPE9J_yQ'
        }
      };

      fetch('https://api.themoviedb.org/3/list/3?language=ua-UA&page=1', options)
        .then(response => response.json())
        .then(response => itemId = response.items[Math.floor(Math.random() * response.items.length)])
        .then(response => console.log(itemId))
        .then(response => outputMovie(itemId.title, itemId.release_date, itemId.overview, itemId.poster_path))
        .catch(err => console.error(err));
})
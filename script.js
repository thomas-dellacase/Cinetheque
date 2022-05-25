window.addEventListener("DOMContentLoaded", ()=>{

    // const getMovies = async searchMovies =>{
    //     const res = await fetch("https://api.themoviedb.org/3/movie/550?api_key=ef9f4ee03e86d9ce8bb6ba271657c225");
    //     const movies = await res.json();
    //     console.log(movies);
    // }
    // fetch('https://api.themoviedb.org/3/movie/discover?api_key=ef9f4ee03e86d9ce8bb6ba271657c225')
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(data) {
    //         console.log(data);
    //     })

    const API_KEY = 'api_key=ef9f4ee03e86d9ce8bb6ba271657c225';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    

    getMovie(API_URL);

    function getMovie(url){
        fetch(url).then(res => res.json()).then(data =>{
            console.log(data.results);
            showMovie(data.results);
        })
    }
    function showMovie(data){
        data.forEach(movies=>{
            const {title,poster_path,vote_average,overview}=movies;
            const movieE1 = document.createElement('div');
            movieE1.classList.add('movie');
            movieE1.innerHTML = `
                <img src="${IMG_URL+poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <spam class="${getColor(vote_average)}">${vote_average}</spam>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    ${overview}
                </div>
            `

        })
    }

    function getColor(vote){
        if(vote>=8){
            return green;
        }else if(vote>=5){
            return orenge;
        }else{
            return red;
        }
    }
});
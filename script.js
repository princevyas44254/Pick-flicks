// Get the search input and button
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Add event listener to the search button
searchButton.addEventListener('click', function () {
    const query = searchInput.value.toLowerCase(); // Get the search query
    const movies = document.querySelectorAll('.movie'); // Get all movie elements

    // Loop through each movie and check if it matches the query
    movies.forEach(movie => {
        const title = movie.getAttribute('data-title').toLowerCase(); // Get the movie title
        if (title.includes(query)) {
            movie.style.display = 'block'; // Show matching movie
        } else {
            movie.style.display = 'none'; // Hide non-matching movie
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const genreFilter = document.getElementById("genre-filter");
    const movies = document.querySelectorAll(".movie");

    genreFilter.addEventListener("change", () => {
        const selectedGenre = genreFilter.value;

        movies.forEach(movie => {
            const movieGenre = movie.dataset.genre;
           

            if (selectedGenre === "all" || movieGenre === selectedGenre) {
                movie.style.display = "block";
            } else {
                movie.style.display = "none";
            }
            
        });
    });
});


// Get the platform filter dropdown
const platformFilter = document.getElementById('platform-filter');

// Add event listener to the platform filter dropdown
platformFilter.addEventListener('change', () => {
    const platform = platformFilter.value; // Get the selected platform
    const query = searchInput.value.toLowerCase(); // Include search query in filter
    const movies = document.querySelectorAll('.movie'); // Get all movie elements

    movies.forEach(movie => {
        const title = movie.getAttribute('data-title').toLowerCase();
        const moviePlatform = movie.getAttribute('data-platform');

        // Show movie if it matches both the platform filter and search query
        if (
            (platform === 'all' || moviePlatform === platform) &&
            (title.includes(query) || query === '')
        ) {
            movie.style.display = 'block';
        } else {
            movie.style.display = 'none';
        }
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const genreFilter = document.getElementById("genre-filter");
    const platformFilter = document.getElementById("platform-filter");
    const searchInput = document.getElementById("search-input");
    const movies = document.querySelectorAll(".movie");

    function filterMovies() {
        const selectedGenre = genreFilter.value.toLowerCase();
        const selectedPlatform = platformFilter.value.toLowerCase();
        const searchQuery = searchInput.value.toLowerCase();

        movies.forEach(movie => {
            const movieGenre = movie.dataset.genre.toLowerCase();
            const moviePlatform = movie.dataset.platform.toLowerCase();
            const movieTitle = movie.dataset.title.toLowerCase();

            const matchesGenre = selectedGenre === "all" || movieGenre === selectedGenre;
            const matchesPlatform = selectedPlatform === "all" || moviePlatform === selectedPlatform;
            const matchesSearch = !searchQuery || movieTitle.includes(searchQuery);

            if (matchesGenre && matchesPlatform && matchesSearch) {
                movie.style.display = "block";
            } else {
                movie.style.display = "none";
            }
        });
    }

    genreFilter.addEventListener("change", filterMovies);
    platformFilter.addEventListener("change", filterMovies);
    searchInput.addEventListener("input", filterMovies);
});
document.addEventListener("DOMContentLoaded", () => {
    const shuffleButton = document.getElementById("shuffle-button");
    const movies = Array.from(document.querySelectorAll(".movie")); // Get all movie elements

    shuffleButton.addEventListener("click", () => {
        // Shuffle logic
        const randomIndex = Math.floor(Math.random() * movies.length); // Random index
        const randomMovie = movies[randomIndex]; // Get a random movie

        // Hide all movies
        movies.forEach(movie => {
            movie.style.display = "none";
        });

        // Display the random movie
        randomMovie.style.display = "block";
    });
});
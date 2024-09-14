
const movies = [
    {"title": "Inception", "year": 2010, "rating": 8.8, "genre": ["Action", "Sci-Fi"], "director": "Christopher Nolan"},
    {"title": "The Dark Knight", "year": 2008, "rating": 9.0, "genre": ["Action", "Crime", "Drama"], "director": "Christopher Nolan"},
    {"title": "Pulp Fiction", "year": 1994, "rating": 8.9, "genre": ["Crime", "Drama"], "director": "Quentin Tarantino"},
    {"title": "The Matrix", "year": 1999, "rating": 8.7, "genre": ["Action", "Sci-Fi"], "director": "Lana Wachowski, Lilly Wachowski"},
    {"title": "Fight Club", "year": 1999, "rating": 8.8, "genre": ["Drama"], "director": "David Fincher"}
  ];

    // 1. Create an array of movie titles
    const movieTitles = movies.map(movie => movie.title);
    console.log("Movies titles: ", movieTitles);

    // 2. Create an array of movies with a rating higher than 8.5.
    const higherRatingMovie = movies.filter(movie => movie.rating > 8.5);
    console.log("Higher rating movies: ", higherRatingMovie);

    // 3. Sort the movies by rating in descending order.
    console.log("Movies sorted by rating descending order: ",  movies.sort((a, b) => (b.rating - a.rating)));


    // 4. Create an array of movies released after the year 2000.
    const releasedAfter2000 = movies.filter(movie => movie.year > 2000);
    console.log("Movies after 2000: ", releasedAfter2000);

    // 5. Sort the movies by year of release in ascending order.
    console.log("Movies sorted by year: ", movies.sort((a, b) => (a.year - b.year)));

    // 6. Create an object that counts the number of movies for each genre.
    const genreCount = movies.reduce((acc, movie) => {
      movie.genre.forEach((g) => {
        acc[g] = (acc[g] || 0) + 1;
      });
      return acc;
    }, {});
    
    console.log(genreCount);

    // 7. Check if all movies have a rating higher than 7.
    const allMoviesAbove7 = movies.every(movie => movie.rating >7);
    console.log("All movies have rating above 7: ", allMoviesAbove7);

    // 8. Calculate the average rating of all movies.
    const averageRating = movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
    console.log("Average rating for all movies: ", averageRating);

    //9. Create an array of objects with only the title and rating of each movie
    const titlesAndRating = movies.map(movie => ({
      title: movie.title,
      rating: movie.rating
    }));
    
    console.log(titlesAndRating);

    // 10. Check if there is at least one movie in the "Sci-Fi" genre
    const isThereScifi = movies.some(movie => movie.genre.includes("Sci-Fi"));

    // 11. Check if there is at least one movie directed by "Quentin Tarantino"
    const hasQuentinTarantino = movies.some(movie => movie.director === "Quentin Tarantino");

    // 13. Find the titles of all movies directed by "Christopher Nolan" that have a rating higher than 8.5, sorted by rating in descending order
    const nolanMoviesHighRated = movies.filter(movie => movie.director === "Christopher Nolan" && movie.rating > 8.5)
    .sort((a, b) => b.rating - a.rating)
    .map(movie => movie.title);

    // / 14. Calculate the average rating of movies released before the year 2000 that belong to the "Drama" genre
    const averageRatingDramaBefore2000 = movies.filter(movie => movie.year < 2000 && movie.genre.includes("Drama"))
    .reduce((sum, movie) => sum + movie.rating, 0) / movies.filter(movie => movie.year < 2000 && movie.genre.includes("Drama")).length;
    console.log("averageRatingDramaBefore2000", averageRatingDramaBefore2000);

    // 15. Create an array of movie titles for movies with a rating higher than 8.5, sorted by their release year
    const highRatedTitlesSortedByYear = movies.filter(movie => movie.rating > 8.5)
    .sort((a, b) => a.year - b.year)
    .map(movie => movie.title);
    console.log("highRatedTitlesSortedByYear", highRatedTitlesSortedByYear);

    // 16. Find the total number of genres covered by movies with a rating higher than 8.8
    // const genresHighRated = movies.filter(movie => movie.rating > 8.8)
    
    // 17. Check if there is at least one movie in the dataset with a rating higher than 9
    const hasMovieRatingAbove9 = movies.some(movie => movie.rating > 9);

    // 18. Check if all movies directed by "Christopher Nolan" have a rating higher than 8.5
    const allNolanMoviesHighRated = movies.filter(movie => movie.director === "Christopher Nolan")
    .every(movie => movie.rating > 8.5);
    
    //commit
  
    
    
    
    
    
    
    
    
    
    
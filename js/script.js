// "use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},   // Т.к. это объект, то мы легко сможем задавать ему ключ -> значение. 
    actors: {},   
    genres: [],  // В массиве при этом лишь порядковый номер
    private: false
};



const movie1 = prompt("Напишите один из последних просмотренных фильмов", ""),
      rating1 = prompt("На сколько вы его оцениваете?", ""),
      movie2 = prompt("Напишите один из последних просмотренных фильмов", ""),
      rating2 = prompt("На сколько вы его оцениваете?", "");

personalMovieDB.movies[movie1] = rating1;
personalMovieDB.movies[movie2] = rating2; 

console.log(personalMovieDB);

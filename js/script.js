"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних проссмотренных фильмов?", ""),
    b =  prompt("На сколько оцените его?", ""),
    c = prompt("Один из последних проссмотренных фильмов?", ""),
    d =  prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
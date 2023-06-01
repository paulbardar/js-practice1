/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */



;(function(){
    'use strict';

    const numberOfFilms = +prompt("How many films have you watched?", "");

    const personalMovieDB = {
        count : numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    // personalMovieDB.count = numberOfFilms;

    // personalMovieDB.movies.firstFilm = prompt("Один из последних просмотренных фильмов?", "");
    // personalMovieDB.movies.firstEstimate = +prompt("На сколько оцените его?", "");
    // personalMovieDB.movies.secondFilm = prompt("Один из последних просмотренных фильмов?", "");
    // personalMovieDB.movies.secondEstimate = +prompt("На сколько оцените его?", "");

    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', ''),
        c = prompt('Один из последних просмотренных фильмов?', ''),
        d = prompt('На сколько оцените его?', '');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;


    console.log("Hello Practice 1");
    console.log(numberOfFilms);
    console.log(personalMovieDB);
    // console.log(personalMovieDB.movies.firstFilm);

})();
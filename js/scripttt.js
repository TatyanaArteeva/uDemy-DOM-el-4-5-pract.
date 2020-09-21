

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const reclame = document.querySelector('.promo__adv');
    const getFoto = reclame.querySelectorAll('img');
        for (let i = 0; i < getFoto.length; i++) {
            getFoto[i].remove();
        }

    const genre = document.querySelector('.promo__genre');
    const createtGenre = document.createElement('div');
    createtGenre.classList.add('promo__genre');
    createtGenre.textContent = "Драма";
    genre.replaceWith(createtGenre);

    const foto = document.querySelector('.promo__bg');
    foto.style.background = 'url(\'img/bg.jpg\') center center/cover no-repeat';

    const form = document.querySelector('.add');
    const btn = form.querySelector('button');
    const input = form.querySelector('.adding__input');
    const accommodation = document.querySelector('.promo__interactive-list');

    const addListFilms = (e) => {
        e.preventDefault();
        const inputValue = input.value;
        if (inputValue == null || inputValue.length == 0) {
            return;
        }
        let liNewFilm = document.createElement('li');
        liNewFilm.classList.add('promo__interactive-item');
        let createdLi = accommodation.appendChild(liNewFilm);
        createdLi.innerHTML = inputValue;
        movieDB.movies.push(createdLi.innerHTML);
        movieDB.movies.sort(compSort);
        
        normalizeFilms();
        addListenerToTrashes(movieDB.movies);

        const lovesFilm = form.querySelector('input[type="checkbox"]');
        if (lovesFilm.checked == true) {
            alert("Добавить любимый фильм!");
        }
        e.target.form.reset();
    };

    normalizeFilms();
    addListenerToTrashes(movieDB.movies);
    btn.addEventListener('click', addListFilms);

    function normalizeFilms(){
        let list = document.querySelectorAll('.promo__interactive-item');
        movieDB.movies.forEach((film,num)=> {
            if (film.length <= 21) {
                list[num].innerHTML= `${num+1}: ${film} <div class="delete"></div>`;
            } else {
                list[num].innerHTML= `${num+1}: ${film.slice(0,22)+'...'} <div class="delete"></div>`;
            }
        });
    }

    function addListenerToTrashes(listFilms) {
        const trashes = document.querySelectorAll('.delete');
        trashes.forEach((trash, i) => {
            trash.addEventListener('click', () => {
                trash.parentElement.remove();
                listFilms.splice(i,1);
                normalizeFilms();
                addListenerToTrashes();
            });
        });
    }

    function compSort(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a == b) {
            return 0;
        }
        if (a > b) {
            return 1;
        }
        return -1;
    }

});





// function deleteFilm() {
    // const trash=document.getElementsByClassName('delete');
    //     let deleteStr=function(e) {
    //         e.target.parentElement.remove();
    //     }

    //     for (let i=0; i<trash.length; i++) {
    //         trash[i].addEventListener('click', deleteStr);

    //     }
    // }

// const a = function(str, number) {
//      console.log(str + ", " + number);
// }
// a("Татьяна", 26);


'use strict';


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};



const reclame=document.querySelector('.promo__adv');
const getFoto=reclame.querySelectorAll('img');
    for (let i=0; i<getFoto.length; i++) {
        getFoto[i].remove();
    }


    
const genre=document.querySelector('.promo__genre');
const createtGenre=document.createElement('div');
    createtGenre.classList.add('promo__genre');
    createtGenre.textContent="Драма";
    genre.replaceWith(createtGenre);

const foto=document.querySelector('.promo__bg');
    foto.style.background='url(\'img/bg.jpg\') center center/cover no-repeat';

const form=document.querySelector('.add');
const btn=form.querySelector('button');
const input=form.querySelector('.adding__input');
const accommodation=document.querySelector('.promo__interactive-list');

const addListFilms=(e)=> {
    e.preventDefault();

    let li=document.createElement('li');
        li.classList.add('promo__interactive-item');
        let createtLi=accommodation.appendChild(li);
        createtLi.innerHTML=input.value;
        movieDB.movies.push(createtLi.innerHTML);
        movieDB.movies.sort(compSort);

    let list=document.querySelectorAll('.promo__interactive-item');
        movieDB.movies.forEach((item,i)=> {
            deleteFilm();

            if (item.length<=21) {
                list[i].innerHTML= `${i+1}: ${item} <div class="delete"></div>`;
            } else {
                list[i].innerHTML= `${i+1}: ${item.slice(0,22)+'...'} <div class="delete"></div>`;
                }
            });

        const lovesFilm=form.querySelector('input[type="checkbox"]');
            if (lovesFilm.checked==true) {
                alert("Добавить любимый фильм!");
                }
            }
btn.addEventListener('click', addListFilms);


function deleteFilm() {
    const trash=document.getElementsByClassName('delete');
    let deleteStr=function(e) {
        e.target.parentElement.remove(this);
    }

    for (let i=0; i<trash.length; i++) {
        trash[i].addEventListener('click', deleteStr);
    }
}
deleteFilm();


function compSort (a,b) {
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



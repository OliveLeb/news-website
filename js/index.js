const $menubtn = document.querySelector('.menu-btn');
$menubtn.addEventListener('click',()=> {
    $menubtn.nextElementSibling.classList.toggle('menu-active');
});

const desktopSize = window.matchMedia("(min-width: 970px)");
window.addEventListener('resize', ()=> {
    if(desktopSize.matches) $menubtn.nextElementSibling.classList.remove('menu-active');
})

// const API_KEY = '77d06390c6ab416b8b18815a188f1274' ;



// const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = 'http://newsapi.org/v2/top-headlines?' +
//           'country=fr&' +
//           'apiKey=77d06390c6ab416b8b18815a188f1274';

// let headers = new Headers();
const url = 'https://jsonplaceholder.typicode.com/posts'

// var req = new Request(proxyurl + url);
var req = new Request(url);
fetch(url/*,{
            method:'GET',
            //mode:'no-cors',
            //headers: {'Content-Type': 'application/json'}
    }*/)
    .then((response) => response.json())
    .then(json => console.log(json))
    .catch(err => {
        console.log('bonjour',err)
    });


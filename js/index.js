const $menu = document.querySelector('.menu');
$menu.addEventListener('click',()=> {
    $menu.nextElementSibling.classList.toggle('menu-active');
})

const API_KEY = '77d06390c6ab416b8b18815a188f1274' ;



const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

var req = new Request(url);
fetch(req,{
            mode:'no-cors',
            headers: {'Content-Type': 'application/json'}
    })
    .then((response) => {
        console.log(response.json());
    })


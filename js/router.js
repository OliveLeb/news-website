import Home from './views/Home.js';
import Category from './views/Category.js';
import Article from './views/Article.js';
import FetchData from './FetchData.js';

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};


const navigateTo = url => {
    history.pushState(null,null, url);
    router();
};

let articlesFetched;

const router = async () => {

    const routes = [
        {path:'/', view: Home, category: 'all'},
        {path:'/tech', view: Category, category:'tech'},
        {path:'/jeuxvideo', view: Category, category:'games'},
        {path:'/:id', view: Article}
    ];

    // Test each routes
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path)),
            category: route.category
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if(!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }
   
    // Fetch articles when first connect and not on every page render
    let articles;
    let data;
    if(!articlesFetched) {
        data = await FetchData();
        articlesFetched = data;
        articles = [...data.tech , ...data.games];
    }
    else {
        data = articlesFetched;
        articles = [...articlesFetched.tech , ...articlesFetched.games];
    }

    // trier les articles par date
    articles.sort((a,b)=> {
        if(new Date(a.publishedAt) > new Date(b.publishedAt)) return -1;
        if(new Date(a.publishedAt) < new Date(b.publishedAt)) return 1;
    });

    // définie les articles to render selon le component afficher
    let articlesPerView = match.category === 'all' ? articles : data[match.category];

    const view = new match.route.view(articlesPerView, getParams(match));
    document.querySelector('#root').innerHTML = await view.getHtml();
};

// Handle previous/next page
window.addEventListener('popstate',router);

document.addEventListener('DOMContentLoaded', ()=> {

    document.querySelectorAll('[data-link]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            navigateTo(link.href);
            document.querySelector('.list-menu').classList.remove('menu-active');
        });
    });
    
    router();
})
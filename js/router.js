import Home from './views/Home.js';
import Category from './views/Category.js';
import FetchData from './FetchData.js';

// const getParams = match => {
//     const values = match.result.slice(1);
//     const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
// };


const navigateTo = url => {
    history.pushState(null,null, url);
    router();
};

const router = async () => {

    const routes = [
        {path:'/', view: Home, category:'informatique%20AND%20football'},
        {path:'/categorie1', view: Category, category:'informatique'},
        {path:'/categorie2', view: Category, category:'football'}
    ];

    // Test each routes
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path,
            category: route.category
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }
    // let view;

    FetchData(match.category)
    .then(articles => new match.route.view(articles))
    .then(view => view.getHtml())
    .then(truc => document.querySelector('#root').innerHTML = truc) 

    // const view = new match.route.view();

    // document.querySelector('#root').innerHTML = await view.getHtml();
    // console.log(location.pathname);
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
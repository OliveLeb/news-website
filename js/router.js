import Home from './views/Home.js';
import Category from './views/Category.js';
import Article from './views/Article.js';
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
        {path:'/', view: Home, category:'informatique OR football'},
        {path:'/informatique', view: Category, category:'informatique'},
        {path:'/football', view: Category, category:'football'},
        {path:'/:categorie/:id', view: Article}
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

    // Check unique value
    function uniqueArticle(arr) {
        let uniques = [];
        let itemsFound = {};
        for(let val of arr){
            if(itemsFound[val.summary]){
                continue;
            }
            uniques.push(val);
            itemsFound[val.summary] = true;
        }
        return uniques;
    }

   

    FetchData(match.category)
    //.then(articles => uniqueArticle(articles))
    .then(articles => new match.route.view(articles))
    .then(view => view.getHtml())
    .then(view => document.querySelector('#root').innerHTML = view);

    //  const view = new match.route.view();
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
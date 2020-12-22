const FetchData = () => {

    const apiKey = '77d06390c6ab416b8b18815a188f1274';
    const url1 = `https://newsapi.org/v2/everything?q=tech&language=fr&sortBy=publishedAt&apiKey=${apiKey}`;
    const url2 = `https://newsapi.org/v2/everything?q=games&language=fr&sortBy=publishedAt&apiKey=${apiKey}`;

    let articles = {
        tech:[],
        games:[]
    };

    return Promise.all([
        fetch(url1),
        fetch(url2)
    ])
    .then((responses)=> {
        return Promise.all(responses.map((response)=> {
            return response.json();
        }))
    })
    .then(data =>{
        articles.tech = data[0].articles;
        articles.games = data[1].articles;
        return articles;
    })
    .catch(err=> console.log(err));



};

export default FetchData;
const FetchData = (category) => {

    return fetch(`https://newscatcher.p.rapidapi.com/v1/search_free?q=${category}&lang=fr&media=True`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "45948fca7amshfcfb6de4c279dc4p112dc8jsn780396746731",
		"x-rapidapi-host": "newscatcher.p.rapidapi.com"
	}
    })
    .then((response) => {
        if(response.ok) return response.json();
        else return Promise.reject(response);
    })
    .then(data => {
        console.log(data);
        return data.articles;
    })
    .catch(err => {
        console.error('Something went wrong.', err);
    });

};

export default FetchData;
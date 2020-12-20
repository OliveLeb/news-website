import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor(articles) {
        super();
        this.setTitle('Home');
        this.getData(articles);
    }

    async getHtml(){
        return `
            <div>Bonjour</div>
        `;
    };

    getData(articles) {
        console.log(articles)
    }

};
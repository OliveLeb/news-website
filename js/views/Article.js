import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(articles,params) {
        super(params);
        this.setTitle('article');
        this.articleId = params.id;
        this.articles = articles;
        this.currentArticle = this.findArticle();
        this.category;
        this.suggestMore();
    }


    findArticle() {
        // reformate url en titre
        const urlToTitle = this.articleId.replaceAll('&',' ').replaceAll('_','\'');

        const articles = Object.values(this.articles);
        const findArticle = articles.map(arr => arr.find(article => article.title === decodeURI(urlToTitle)));

        // Define the category of the current article
        if(findArticle[0] === undefined) this.category = 'games';
        else this.category = 'tech';

        const articleFound = findArticle.filter(res => res !== undefined);

        return articleFound[0];
    }

    async suggestMore() {
        let articlesFig= '';
        const otherArticles = this.articles[this.category].filter(articles => JSON.stringify(articles) !== JSON.stringify(this.currentArticle));
        for(let i=0;i<4;i++) {
            articlesFig += `
                    <figure>
                    <img src=${otherArticles[i].urlToImage} style='width:100px;height:auto'>
                    <figcaption>
                    <p>${otherArticles[i].title}</p>
                    </figcaption>
                    </figure>
            `
        }
        return articlesFig;
    }



    async getHtml() {
        return `
                <section>
                <figure>
                <img src=${this.currentArticle.urlToImage} style='width:500px;height:auto'>
                <figcatpion>
                <p><h1>${this.currentArticle.title}</h1><p>
                <p>${this.currentArticle.description}</p>
                <p>Par ${this.currentArticle.author} le ${this.currentArticle.publishedAt}</p>
                </figcatpion>
                </figure>
                <article>
                ${this.currentArticle.content}
                <p>Lire la suite ici : <a href=${this.currentArticle.url}>${this.currentArticle.source.name}</a></p>
                </article>
                </section>
                <section>
                <h2>Voir Aussi</h2>
                ${await this.suggestMore()}
                </section>
        `;
    }
}
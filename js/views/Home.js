import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor(articles,params) {
        super(params);
        this.setTitle('Direct News');
        this.articles = articles;
    }

    async articleListing() {
        let article = '';
        for(let i=1; i<10;i++){
            article += `
                <figure class="article">
                <a href='/${await this.defineArticleUrl(i)}'>
                <figcaption>
                    ${this.articles[i].title}
                </figcaption>
                </a>
                 <a href='/${await this.defineArticleUrl(i)}'>
                <img src=${this.articles[i].urlToImage} alt="" />
                </a>
                </figure>
            `
        };
        return article;
    }
    async defineArticleUrl(index) {
        const newUrl = this.articles[index].title.replaceAll(' ','&&').replaceAll('\'','_').replaceAll('/','--');
        return newUrl;
    }

    async getHtml() {
        return `
            <section id="home">
            <section>
            <figure class="headline">
            <a href='/${await this.defineArticleUrl(0)}'>
                <img
                class="headline-img"
                src=${this.articles[0].urlToImage}
                alt=""
                />
            </a>
                <a href='/${await this.defineArticleUrl(0)}'>
                <figcaption>
                <h1>${this.articles[0].title}</h1>
                <p>${this.articles[0].description}</p>
                ${this.articles[0].author === null ? '' : `<p>Par ${this.articles[0].author}</p>`}
                </figcaption>
                </a>
            </figure>
            <section class="article-list-home">
                ${await this.articleListing()}       
            </section>
            </section>
            <aside>
            <form action="" class="newsletter-desktop">
                <label for="email">Newsletter</label>
                <input
                type="email"
                name="email"
                id="email"
                placeholder="Votre email"
                />
                <button type="submit">Subscribe</button>
            </form>
            </aside>
        </section>
        `;
    };
};
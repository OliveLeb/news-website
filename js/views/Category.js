import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor(articles) {
        super();
        this.setTitle('Home');
        this.articles = articles;
    }

    async articleListing() {
        let article = '';
        for(let i=1; i<10;i++){
            article += `
                <figure class="article">
                <figcaption>
                    ${this.articles[i].title}
                </figcaption>
                <img src=${this.articles[i].urlToImage} alt="" />
                </figure>
            `
        };
        return article;
    }

    async getHtml(){
        return `
            <section id="categories">
            <section>
            <figure class="headline">
                <img
                class="headline-img"
                src=${this.articles[0].urlToImage}
                alt=""
                />
                <figcaption>
                <h1>${this.articles[0].title}</h1>
                <p>${this.articles[0].description}</p>
                <p>Par ${this.articles[0].author}</p>
                </figcaption>
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
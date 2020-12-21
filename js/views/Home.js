import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor(articles) {
        super();
        this.setTitle('Direct News');
        this.articles = articles;
    }

    async articleListing() {
        let article;
        for(let i=1; i<11;i++){
            article += `
                <figure class="article">
                <figcaption>
                    ${this.articles[i].title}
                </figcaption>
                <img src=${this.articles[i].urlToImage} alt="" />
                </figure>
            `
        };
        console.log(this.articles)
        return article;
    }

    async getHtml() {
        return `
            <section id="home">
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
        // return console.log(this.articles)
    };
};

/*
<figure class="article">
                <figcaption>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </figcaption>
                <img src="https://via.placeholder.com/100x100" alt="" />
                </figure>
                <figure class="article">
                <figcaption>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </figcaption>
                <img src="https://via.placeholder.com/100x100" alt="" />
                </figure>
                <figure class="article">
                <figcaption>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </figcaption>
                <img src="https://via.placeholder.com/100x100" alt="" />
                </figure>
                <figure class="article">
                <figcaption>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </figcaption>
                <img src="https://via.placeholder.com/100x100" alt="" />
                </figure>
                <figure class="article">
                <figcaption>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </figcaption>
                <img src="https://via.placeholder.com/100x100" alt="" />
                </figure>
                <figure class="article">
                <figcaption>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </figcaption>
                <img src="https://via.placeholder.com/100x100" alt="" />
                </figure>
*/
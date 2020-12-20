import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor(articles) {
        super();
        this.setTitle('Direct News');
        this.articles = articles;
    }

    async getHtml() {
        return `
            <section id="home">
            <section>
            <figure class="headline">
                <img
                class="headline-img"
                src=${this.articles[2].media}
                alt=""
                />
                <figcaption>
                <h1>${this.articles[2].title}</h1>
                ${this.articles[2].summary}
                </figcaption>
            </figure>

            <section class="article-list">
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
export default class {
    constructor(articles,params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return '';
    }

}
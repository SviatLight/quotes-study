export default class Quote {
    constructor(quoteData = {}) {
        this.quoteData = quoteData;

        this.render(); 
    }

    getTemplate() {
        const quoteInfo = this.quoteData.quote;
        return `

            <div class="wrapper">
                <div class="wrapper-quote">
                    <div class="quote">
                        <p>${quoteInfo.body}</p>
                    </div>
                    <div class="quote-author">
                        <p>Author:</p>
                        <p>${quoteInfo.author}</p>
                    </div>
                    <div class="quote-tags">
                        <p>Tags:</p>
                        <p>${quoteInfo.tags.map(item => `#${item}`).join(' ')}</p>
                    </div>
                </div>
            </div>
        `
    }
    

    render() {
        const wrapper = document.createElement('div');

        wrapper.innerHTML = this.getTemplate();

        this.element = wrapper.firstElementChild;

        console.log(this.quoteData.quote.tags);
    }
} 
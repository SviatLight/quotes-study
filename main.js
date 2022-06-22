export default class Quote {
    constructor(quoteData = {}) {
        this.quoteData = quoteData;

        this.render(); 
    }

    getNewQuote() {
        const btn = this.element.querySelector('#btn-reload');
        btn.addEventListener('click', () => {
            document.location.reload();
        })
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
                <button class="btn-reload" id="btn-reload">New Quote</button>
            </div>
        `
    }
    

    render() {
        const wrapper = document.createElement('div');

        wrapper.innerHTML = this.getTemplate();

        this.element = wrapper.firstElementChild;
        this.getNewQuote()
        console.log(this.quoteData.quote.tags);
    }
} 
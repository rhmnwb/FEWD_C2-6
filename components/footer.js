class Footer extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/components/footer.css"/>
            <div class="x-flex-container">
                <p>© 2025 Burro Inc</p>
                <div class="x-flex-container">
                    <a href=""><p>Privacy Policy</p></a>
                    <a href=""><p>Terms and Conditions</p></a>
                </div>
            </div>
        `
    }

}

customElements.define('main-footer', Footer);

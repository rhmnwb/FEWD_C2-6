class Footer extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/components/navbar.css"/>
            <nav class="x-flex-container" style="padding: 10px;">
                <div>Title</div>
                <div class="x-flex-container" style="background-color: blue; gap: 10px;">
                    <div>About</div>
                    <div>Blog</div>
                    <div>Tags</div>
                    <div>Icon</div>
                </div>
            </nav>
        `
    }

}

customElements.define('main-footer', Footer);

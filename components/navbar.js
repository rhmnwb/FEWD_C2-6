class NavBar extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/components/navbar.css"/>
            <nav class="x-flex-container" style="padding: 10px;">
                <h3>Burro</h3>
                <div class="x-flex-container">
                    <a href=""><h5>About</h5></a>
                    <a href=""><h5>Contact</h5></a>
                    <img class="small-icon" src="/static/images/donkey.png" alt="Icon">
                </div>
            </nav>
        `
    }

}

customElements.define('nav-bar', NavBar);

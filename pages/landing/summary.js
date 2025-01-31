class PostSummary extends HTMLElement {

    static get observedAttributes() {
        return ["title", "preview", "body", "date", "collapsed"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/pages/landing/summary.css"/>
            <div id="summary-card" class="collapsible" style="background-color: purple">
                <div id="summary-text">
                    <p id="date" style="background-color: orange">Loading...</p>
                    <h1 id="title" style="background-color: yellow">Loading...</h1>
                    <p id="preview" style="background-color: orange">Loading...</p>         
                </div>
                <img id="image" src="https://picsum.photos/200/300" alt="Image"/>
            </div>
        `;
        //         this.addEventListener("click", () => this.openDetail());
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "collapsed") {
            this.shadowRoot.querySelector(`#summary-card`).setAttribute(name, newValue);
            return
        }
        this.shadowRoot.querySelector(`#${name}`).textContent = newValue;
    }

    // openDetail() {
    //     const event = new CustomEvent("open-post", {
    //         detail: {
    //             title: this.getAttribute("title"),
    //             body: this.getAttribute("body")
    //         },
    //         bubbles: true
    //     });
    //     this.dispatchEvent(event);
    // }

}

customElements.define('post-summary', PostSummary);


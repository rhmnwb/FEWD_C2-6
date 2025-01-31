class PostSummary extends HTMLElement {

    static get observedAttributes() {
        return ["title", "preview", "body", "date", "collapsed", "image-description"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/pages/landing/summary.css"/>
            <div id="summary-card" class="collapsible">
                <div id="summary-text">
                    <p id="date">Loading...</p>
                    <h1 id="title">Loading...</h1>
                    <p id="preview">Loading...</p>         
                </div>
                <div class="center-aligned">
                    <img id="image" src="https://picsum.photos/200/300" alt="Image"/>
                    <p id="image-description">...</p>
                </div>
            </div>
        `;
        //         this.addEventListener("click", () => this.openDetail());
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "collapsed") {
            this.shadowRoot.querySelector(`#summary-card`).setAttribute(name, newValue);
            return
        } else if (name === "image-description") {
            this.shadowRoot.querySelector(`#image`).setAttribute("alt", newValue);
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


const template = document.createElement("template")
template.innerHTML = `
    <p style="color: green">
        <slot></slot>
        <span class="description"><slot name="another"></slot></span>
    </p>
`

class BlogBody extends HTMLElement {

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log(`Custom element added to page: ${this.innerText}`);
    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
    }

}

customElements.define('blog-body', BlogBody);

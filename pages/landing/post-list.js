const POST_LIST_TAG_NAME = "post-list";

class PostList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="/pages/landing/post-list.css"/>
          <div id="test" class="y-flex-container y-spacing">
            <slot></slot>
          </div>
        `;

    }
}

customElements.define(POST_LIST_TAG_NAME, PostList);

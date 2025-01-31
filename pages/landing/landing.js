import './summary.js';
import './post-list.js';

const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="/pages/landing/landing.css"/>
  <div id="container" class="y-flex-container">
    <slot name="post-list"></slot>
  </div>
`;

class LandingPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const loading = document.createElement("h1");
        loading.innerHTML = "Loading posts...";
        loading.setAttribute("slot", "post-list");
        this.shadowRoot.appendChild(loading);

        _fetchPosts(1000).then(r => {
            this.shadowRoot.removeChild(loading)
            return r;
        }).then(r => r.json()).then(posts => {

            const landingPage = this.shadowRoot;
            if (posts.length === 0) {
                throw new Error("No posts found");
            }

            const postList = document.createElement("post-list");
            postList.setAttribute("slot", "post-list");

            posts.forEach((post, i) => {
                const summary = document.createElement("post-summary");
                summary.setAttribute("date", "2 Feb, 2024");
                summary.setAttribute("title", post.title);
                summary.setAttribute("preview", post.body.substring(0, 50) + "...");
                //summary.setAttribute("body", post.body);
                summary.setAttribute("collapsed", i > 0 ? "true" : "false");
                postList.appendChild(summary);
            });

            landingPage.appendChild(postList);

        }).catch(e => {
            console.error("Failed to fetch posts", e);
            const landingPage = this.shadowRoot;
            landingPage.innerHTML = "<h1>Failed to fetch posts :(</h1>";
        });

    }
}

async function _fetchPosts(delay) {

    return new Promise(resolve => setTimeout(resolve, delay)).then(() => {

        return fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");

    }).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response;

    });

}

customElements.define('landing-page', LandingPage);


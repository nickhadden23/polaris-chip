import { LitElement, html, css } from 'lit';
import { ref } from 'lit/directives/ref.js';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "#";
    this.image = "#";
    this.backgroundColor = "#";
    this.link = "#";
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      backgroundColor: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
  static get styles() 
  {
    return css`
      :host {
        display: block;
        width: 50%;
        max-width: 200px;
        border: 6px solid black;
        border-radius: 8px;
        padding: 16px;
        background-color: var(--card-bg, #3333FF);
        margin: 16px;
      }
        :host([fancy]) 
        {
        background-color: purple;
        border: 6px solid black;
      }
    img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
          display: block;
          margin: 0 auto;
        }
    h2 {
          margin: 16px 0 8px;
        }
        p {
          margin: 8px 0;
        }
          a {
          display: inline-block;
          margin-top: 16px;
          padding: 8px 16px;
          background-color: #007BFF;
          color: white;
          text-decoration: none;
          border-radius: 4px;
        }
        a:hover {
          background-color: #0056b3;
        }
          .toggle-button {
        margin-top: 16px;
        padding: 8px 16px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
        openChanged(event) 
        {
    this.fancy = event.target.open;
  }
      `;
  }
  render() 
  {
    return html`
    <div id="cardlist">
        <div class="card">
          <h1 class="cardheader"><b>${this.title}</b></h1>
          <img src=${this.image} alt=${this.title} />
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div>
              <slot></slot>
              <a href=${this.link} target="_blank">
                <button class="btn"><em>Link for more info</em></button>
              </a>
            </div>
          </details>
          <button class="toggle-button" @click="${this.toggleFancy}">
            ${this.fancy ? 'Make Regular' : 'Make Fancy'}
          </button>
      </div>
    </div>`;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

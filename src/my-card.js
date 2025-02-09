import { LitElement, html, css } from 'lit';

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
    this.title = "Saquon Barkley";
    this.image = "https://www.philly.com/resizer/eo2Cg-MSE2qI7xkkGDRPslLHNFY=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/3FXVFASYGFH3TMKNO7CGDN3ZEQ.jpg";
    this.backgroundColor = "#3333FF";
    this.link = "https://iam.hax.psu.edu/nch5296/sites/ist256hw2/page-1";
  }

  render() {
    return html`<div>${this.title}</div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      backgroundColor: { type: String },
      link: { type: String },
    };
  }
  static get styles() 
  {
    return css`
      :host {
        display: block;
        width: 100%;
        max-width: 400px;
        border: 6px solid black;
        border-radius: 8px;
        padding: 16px;
        background-color: var(--card-bg, #3333FF);
        margin: 16px;
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
      `;
  }
  render() 
  {
    return html`
      <div style="background-color: ${this.backgroundColor}; padding: 16px; border-radius: 8px;">
        <img src="${this.image}" alt="${this.title}">
        <section>
          <h2>${this.title}</h2>
          <p><strong>College:</strong> Penn State</p>
          <p><strong>Position:</strong> Running Back</p>
          <a href="${this.link}" class="details-btn">Details</a>
        </section>
      </div>
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

import React from 'react';

/*
  This tagline will appear in your homepage
*/

const Cards = () => (
  <section className="grid-container usa-section">
    <ul className="usa-card-group">
      <li className="tablet:grid-col-4 usa-card">
        <div className="usa-card__container">
          <header className="usa-card__header">
            <h2 className="usa-card__heading">Consumer resources</h2>
          </header>
          <div className="usa-card__media">
            <div className="usa-card__img">
              <img
                src="images/one.jpg"
                alt="A placeholder image"
              />
            </div>
          </div>
          <div className="usa-card__body">
            <p>
              We produce innovative tools and resources to help consumers like you make informed financial decisions and build financial skills.
            </p>
          </div>
          <div className="usa-card__footer">
            <button className="usa-button">Consumer tools</button>
          </div>
        </div>
      </li>
      <li className="tablet:grid-col-4 usa-card">
        <div className="usa-card__container">
          <header className="usa-card__header">
            <h2 className="usa-card__heading">Learning through data and research</h2>
          </header>
          <div className="usa-card__media">
            <div className="usa-card__img">
              <img
                src="images/two.jpg"
                alt="A placeholder image"
              />
            </div>
          </div>
          <div className="usa-card__body">
            <p>
              We publish research and information we’ve collected about the consumer financial marketplace.
            </p>
          </div>
          <div className="usa-card__footer">
            <button className="usa-button">Data and research</button>
          </div>
        </div>
      </li>
      <li className="tablet:grid-col-4 usa-card">
        <div className="usa-card__container">
          <header className="usa-card__header">
            <h2 className="usa-card__heading">Rules of the road</h2>
          </header>
          <div className="usa-card__media">
            <div className="usa-card__img">
              <img
                src="images/three.jpg"
                alt="A placeholder image"
              />
            </div>
          </div>
          <div className="usa-card__body">
            <p>
              We create clear rules to implement the law and preserve choices for consumers.
            </p>
          </div>
          <div className="usa-card__footer">
            <button className="usa-button">Rules and policy</button>
          </div>
        </div>
      </li>
    </ul>
  </section>
);

export default Cards;

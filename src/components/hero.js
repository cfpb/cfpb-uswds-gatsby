import React from 'react';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Hero = () => (
  <section className="usa-hero">
    <div className="grid-container">
      <div className="usa-hero__callout">
        <h2 className="usa-hero__heading">
          <span className="usa-hero__heading--alt">On your side</span>
            through all of life's important decisions
        </h2>
        <p>
          At the Consumer Financial Protection Bureau, we're dedicated to omaking sure you're treated fairly by banks, lenders and other financial institutions.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;

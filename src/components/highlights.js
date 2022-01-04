import React from 'react';
import circle from '../../node_modules/uswds/dist/img/circle-124.png';

/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const Highlights = () => (
  <section className="usa-graphic-list usa-section">
    <div className="grid-container">
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src="https://files.consumerfinance.gov/f/images/cfpb_empowering_consumers.original.png" height="124" width="124" alt="Alt text" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Protect yourself financially from coronavirus
            </h3>
            <p>
              The CFPB is committed to providing consumers with up-to-date information and resources to protect and manage their finances.
            </p>
            <div>
              <button className="usa-button">Access our resources</button>
            </div>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src="https://files.consumerfinance.gov/f/images/cfpb_learning_through_data_and_research.original.png" height="124" width="124" alt="Alt text" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Shining a light on small business lending
            </h3>
            <p>
              Small businesses are pillars of their communities—and of the American economy.
            </p>
            <div>
              <button className="usa-button">Learn more</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src="https://files.consumerfinance.gov/f/images/cfpb_rules_of_the_road.original.png" height="124" width="124" alt="Alt text" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Never highlight anything without a goal.
            </h3>
            <p>
              For anything you want to highlight here, understand what your
              users know now, and what activity or impression you want from them
              after they see it.
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src="https://files.consumerfinance.gov/f/images/cfpb_empowering_consumers.original.png" height="124" width="124" alt="Alt text" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Could also have 2 or 6.
            </h3>
            <p>
              In addition to your goal, find out your users’ goals. What do they
              want to know or do that supports your mission? Use these headings
              to show those.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  </section>
);

export default Highlights;

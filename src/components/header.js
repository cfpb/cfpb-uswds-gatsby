import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ children, siteTitle }) => (
  <header className="usa-header usa-header--extended" role="banner">
    <div className="usa-navbar">
      <div className="usa-logo" id="extended-logo">
        <em className="usa-logo__text">
          <Link to="/" title="Home" aria-label="Home">
          <img alt="Consumer Financial Protection Bureau" height="50" sizes="(max-width: 900px) 161px,
                237px" src="https://www.consumerfinance.gov/static/img/logo_237x50@2x.png" width="237" />
          </Link>
        </em>
      </div>
      <button className="usa-menu-btn">Menu</button>
    </div>
    {children}
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { navigate } from '@reach/router';

const SearchForm = ({ navigation, secondaryLinks }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          pathPrefix
          siteMetadata {
            searchgov {
              affiliate
              endpoint
              inline
            }
          }
        }
      }
    `
  );
  const { affiliate, endpoint, inline } = site.siteMetadata.searchgov;

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.query.value;
    if (inline) {
      navigate(`${site.pathPrefix}/search?query=${query}`);
    } else {
      window.location.replace(
        `${endpoint}/search?utf8=✓&affiliate=${affiliate}&query=${query}`
      );
    }
  };

  return (
    <form className="usa-search usa-search--small" role="search">
      <label className="usa-sr-only" for="extended-search-field-en-small">
        Search
      </label>
      <input className="usa-input" id="extended-search-field-en-small" type="search" name="search" />
      <button className="usa-button" type="submit">
        <img src="https://federalist-3b6ba08e-0df4-44c9-ac73-6fc193b0e19c.app.cloud.gov/preview/uswds/uswds/develop/dist/img/usa-icons-bg/search--white.svg" className="usa-search__submit-icon" alt="Search" />
      </button>
    </form>
  );
};

export default SearchForm;

module.exports = {
  siteMetadata: {
    author: 'Foo',
    title: `Consumer Financial Protection Bureau`,
    description: `Consumer Financial Protection Bureau (EAC) Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aenean et sapien a leo auctor scelerisque quis nec magna. Sed dictum ante a risus vehicula facilisis.`,
    navigation: [
      {
        title: 'Consumer Education',
        items: [
          { text: 'Consumer Resources Overview', link: '/document-with-sidenav' },
          { text: 'Resources for Practitioners', link: '/document-with-sidenav' },
          { text: 'Coronavirus Resources', link: '/document-with-sidenav' },
          { text: 'Consumer Complaint Database', link: '/document-with-sidenav' },
          { text: 'Some other links...', link: '/document-with-sidenav' }
        ],
      },
      {
        title: 'Rules & Policy',
        items: [
          { text: 'Final Rules', link: '/document-with-sidenav' },
          { text: 'Interactive Regulations', link: '/document-with-sidenav' },
          { text: 'Some other links...', link: '/document-with-sidenav' }
        ],
      },
      {
        title: 'Enforcement',
        items: [
          { text: 'Enforcement Actions', link: '/document-with-sidenav' },
          { text: 'Some other links...', link: '/document-with-sidenav' }
        ],
      },
      {
        title: 'Compliance',
        items: [
          { text: 'Compliance Resources', link: '/document-with-sidenav' },
          { text: 'Some other links...', link: '/document-with-sidenav' }
        ],
      },
      {
        title: 'Data & Research',
        items: [
          { text: 'Research & Reports', link: '/document-with-sidenav' },
          { text: 'Some other links...', link: '/document-with-sidenav' }
        ],
      },
      {
        title: 'News',
        items: [
          { text: 'Press Releases', link: '/blog' },
          { text: 'Some other links...', link: '/blog' }
        ],
      },
    ],
    secondaryLinks: [
      { text: 'Submit a complaint', link: '/document-with-sidenav' }
    ],

    /**
     * Search.gov configuration
     * 
     * 1. Create an account with Search.gov https://search.usa.gov/signup
     * 2. Add a new site.
     * 3. Add your site/affiliate name here.
     */
    searchgov: {
      
      // You should not change this.
      endpoint: 'https://search.usa.gov',
      
      // replace this with your search.gov account
      affiliate: 'federalist-uswds-example',
      
      // replace with your access key
      access_key: 'xX1gtb2RcnLbIYkHAcB6IaTRr4ZfN-p16ofcyUebeko=',
      
      // this renders the results within the page instead of sending to user to search.gov
      inline: true, 
    },

    /**
     * Digital Analytics Program (DAP) configuration
     * 
     * USAID   - Agency for International Development
     * USDA    - Department of Agriculture
     * DOC     - Department of Commerce
     * DOD     - Department of Defense
     * ED      - Department of Education
     * DOE     - Department of Energy
     * HHS     - Department of Health and Human Services
     * DHS     - Department of Homeland Security
     * HUD     - Department of Housing and Urban Development
     * DOJ     - Department of Justice
     * DOL     - Department of Labor
     * DOS     - Department of State
     * DOI     - Department of the Interior
     * TREAS   - Department of the Treasury
     * DOT     - Department of Transportation
     * VA      - Department of Veterans Affairs
     * EPA     - Environmental Protection Agency
     * EOP     - Executive Office of the President
     * GSA     - General Services Administration
     * NASA    - National Aeronautics and Space Administration
     * NARA    - National Archives and Records Administration
     * NSF     - National Science Foundation
     * NRC     - Nuclear Regulatory Commission
     * OPM     - Office of Personnel Management
     * USPS    - Postal Service
     * SBA     - Small Business Administration
     * SSA     - Social Security Administration
     */
    dap: {
      // agency: 'your-agency',

      // Optional
      // subagency: 'your-subagency',
    },

    /**
     * Google Analytics configuration
     */
    ga: {
      // ua: 'your-ua',
    },
  },
  pathPrefix: process.env.BASEURL || '/document-with-sidenav',
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/blog-posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documentation-pages`,
        path: `${__dirname}/src/documentation-pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cfpb-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

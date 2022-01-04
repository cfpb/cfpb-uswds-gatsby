# CFPB + U.S. Web Design System + Gatsby

Based on [18f's Federalist starter repo](https://github.com/18F/federalist-uswds-gatsby).

### Running the application locally

```bash
yarn
yarn develop
```

Open your web browser to [localhost:8000](http://localhost:8000/) to view the site.

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

### Deploying the application to GH pages

```bash
yarn deploy
```

## Technologies you should be familiarize yourself with

- [Gatsby](https://www.gatsbyjs.org/) - The framework that does all the magic
- [React](https://reactjs.org/) - The view library
- [GraphQL](https://graphql.org/) - The data layer used by Gatsby
- [node](https://nodejs.org/en/) - Javascript runtime
- [npm](https://www.npmjs.com/) - Javascript dependency manager
- [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov)

### 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## Things to Note

- The Federalist script runs the Gatsby build with the `--prefix-paths` flag. This is necessary to make sure all internal internal links point to the correct path for preview deployments.
- Always use the `Link` component provided by Gatsby for internal links, see previous note.
- Importing USWDS images can be done straight from their local location in `node_modules`. See [Banner.js](https://github.com/18F/federalist-uswds-gatsby/blob/main/src/components/banner.js) for an example.
- This is built from the default [Gatsby default starter](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-default/), you can view the documentation there to see more of what is included.

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the [CC0 1.0
> Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication.
> By submitting a pull request, you are agreeing to comply with this waiver of
> copyright interest.

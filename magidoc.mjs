export default {
  introspection: {
    type: 'url',
    url: 'http://localhost',
  },
  website: {
    template: 'carbon-multi-page',
    output: './public/docs',
    options: {
      appTitle: 'LCDB GraphQL',
      siteRoot: '/docs',
      appLogo: 'https://lcdb.org/images/logo.svg',
      appFavicon: 'https://lcdb.org/favicon.ico',
      pages: [
        {
          title: 'Welcome',
          content: `
LCDB GraphQL Database
=====================

This is the database for \`https://lcdb.org\`.

You are free to use this GraphQL database for your own purposes.

The endpoint is a POST to \`https://graphql.lcdb.org\`

[Read the Documentation](https://graphql.lcdb.org/docs)
          `,
        }
      ],
    }
  }
}

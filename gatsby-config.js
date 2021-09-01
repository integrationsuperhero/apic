module.exports = {
  siteMetadata: {
    title: 'Integration Tech I/O',
    description: 'Integration Tech I/O',
    keywords: 'ibm,cp4i,carbon',
  },
  plugins: ['gatsby-theme-carbon',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: './src/data'
      },
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: './src/images/custom-icon-512.png',
        isSearchEnabled: true,
        repository: {
          baseUrl:
            'https://integrationsuperhero.github.io/techcon2021/integration-tech-io/',
          subDirectory: '/',
        },
      },
    }
  ],
  pathPrefix: "/techcon2021/integration-tech-io/",
};

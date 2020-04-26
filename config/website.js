const config = {
  siteTitle: 'Segredo Dev', // Site title.
  siteTitleShort: 'Segredo Dev', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Blog pessoal Italo Aurelio - @iaurg', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://segredo.dev', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'Blog sobre Programação, tutoriais para iniciantes, assuntos off-topic e tecnologia em geral. Busca de excelência.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssTitle: 'Segredo Dev RSS feed', // Title of the RSS feed
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-47311644-5', // GA tracking ID.
  disqusShortname: 'https-vagr9k-github-io-gatsby-advanced-starter', // Disqus shortname.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: 'Italo Aurelio', // Username to display in the author segment.
  userEmail: 'italoaurelior@gmail.com', // Email used for RSS feed's author segment
  userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'North Pole, Earth', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription:
    'Eu Italo Aurelio sou um desenvolvedor de software. Meu foco é buscar ser cada dia melhor.', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/iaurg',
      iconClassName: 'fa fa-github'
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/iaurg',
      iconClassName: 'fa fa-twitter'
    },
    {
      label: 'Email',
      url: 'mailto:italoaurelior@gmail.com',
      iconClassName: 'fa fa-envelope'
    }
  ],
  copyright: 'Copyright © 2020. Italo A', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#000', // Used for setting manifest and progress theme colors.
  backgroundColor: '#231C42', // Used for setting manifest background color.
  ogSiteName: 'Segredo Dev', // Facebook Site Name
  ogLanguage: 'pt_BR'
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') { config.siteUrl = config.siteUrl.slice(0, -1) }

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') { config.siteRss = `/${config.siteRss}` }

module.exports = config

/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://localhost:3000',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'weekly',
    priority: 0.7,
    trailingSlash: false,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
};

module.exports = config;
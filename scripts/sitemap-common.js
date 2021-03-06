const fs = require("fs");
const globby = require("globby");

async function generateSiteMap() {
  const pages = await globby([
    "pages/**/*.js",
    "!pages/_*.js",
    "!pages/**/[id].js",
    "!pages/api",
    "projects/*.md",
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
            .map((page) => {
              const path = page
                .replace("pages", "")
                .replace(".js", "")
                .replace(".md", "");
              const route = path === "/index" ? "" : path;
              return `
                      <url>
                          <loc>${`https://paul-savoye.fr/${route}`}</loc>
                      </url>
                  `;
            })
            .join("")}
      </urlset>
  `;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSiteMap();

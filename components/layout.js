import React, { Fragment } from "react";
import Head from "next/head";
import Toolbar from "./toolbar/toolbar";
import utilStyles from "../styles/utils.module.css";

const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <Fragment>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');`,
            }}
          />
        </Fragment>
        <link rel="icon" href="https://paul-savoye.fr/favicon.ico" />
        <meta
          name="description"
          content="Paul SAVOYE développeur fullstack sur Toulon. Je développe vos applications web, mobile Android et IOS sous React JS, Next JS, React Native."
        />

        <meta itemProp="name" content="Paul SAVOYE - Développeur Fullstack" />
        <meta
          itemProp="description"
          content="Paul SAVOYE développeur fullstack sur Toulon. Je développe vos applications web, mobile Android et IOS sous React JS, Next JS, React Native."
        />
        <meta
          itemProp="image"
          content="http://paul-savoye.fr/images/paul-savoye.png"
        />

        <meta property="og:url" content="https://paul-savoye.fr" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Paul SAVOYE - Développeur Fullstack Toulon"
        />
        <meta
          property="og:description"
          content="Paul SAVOYE développeur fullstack sur Toulon. Je développe vos applications web, mobile Android et IOS sous React JS, Next JS, React Native."
        />
        <meta
          property="og:image"
          content="http://paul-savoye.fr/images/paul-savoye.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Paul SAVOYE - Développeur Fullstack Toulon"
        />
        <meta
          name="twitter:description"
          content="Paul SAVOYE développeur fullstack sur Toulon. Je développe vos applications web, mobile Android et IOS sous React JS, Next JS, React Native."
        />
        <meta
          name="twitter:image"
          content="http://paul-savoye.fr/images/paul-savoye.png"
        />
        <title>Paul SAVOYE - Développeur Fullstack Toulon</title>
      </Head>

      <main>
        <Toolbar />
        {children}
      </main>
      <div className={utilStyles.footer}>
        <div>© 2020 Paul SAVOYE</div>
        <a href="https://www.linkedin.com/in/paul-savoye">
          <img
            className={utilStyles.footer_img}
            alt="Paul Savoye Linkedin"
            src="/images/paul-savoye-linkedin.png"
          />
        </a>
      </div>
    </div>
  );
}

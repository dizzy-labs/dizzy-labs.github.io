import axios from 'axios'
import React from 'react'
export default {
  getSiteData: () => ({
    title: 'Dizzy Directory'
  }),
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Dizzy Directory</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
}

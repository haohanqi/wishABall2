import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type SEOProps = {
  description: string;
  lang?: string;
  keywords: string[];
  title?: string;
  pathname?: string;
};

const SEO: FC<SEOProps> = ({
  description,
  lang,
  keywords,
  title,
  pathname,
}) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
        }
      }
    }
  `);
  const metaDescription = description || data.site.siteMetadata.description;
  const metaUrl = `${data.site.siteMetadata.siteUrl}/${pathname}`;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(
        keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
          : [],
      )}
    >
      <html lang={lang ? lang : 'en'} />
      <title itemProp="name" lang={lang ? lang : 'en'}>
        {`OSE (over sea education and sports) ${title}`}
      </title>
      <meta name="description" content={description} />
      {metaUrl && <meta property="og:url" content={metaUrl} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  );
};

export default SEO;
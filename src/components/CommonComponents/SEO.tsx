import React, { FC } from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

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
  const keywordsString = keywords.join(`, `);
  return (
    <Helmet>
      <html lang={lang || "en"} />
      <title itemProp="name" lang={lang || "en"}>
        {`OSE (oversea education and sports) ${title}`}
      </title>
      <meta name="description" content={description} />
      {metaUrl && <meta property="og:url" content={metaUrl} />}
      {title && <meta property="og:title" content={title} />}
      {description && (
        <meta property="og:description" content={metaDescription} />
      )}
      <meta property="keywords" content={keywordsString} />
    </Helmet>
  );
};

export default SEO;

"use client"

import Head from "next/head"
import { useLanguage } from "@/contexts/language-context"

interface SEOPropsLocalized {
  title: {
    de: string
    en: string
  }
  description: {
    de: string
    en: string
  }
  keywords?: {
    de: string
    en: string
  }
  ogImage?: string
}

interface SEOPropsSimple {
  title: string
  description: string
  keywords?: string
  ogImage?: string
}

type SEOProps = SEOPropsLocalized | SEOPropsSimple

function isLocalizedProps(props: SEOProps): props is SEOPropsLocalized {
  return typeof props.title === "object" && props.title !== null && "de" in props.title
}

export function SEOMetadata(props: SEOProps) {
  const { language } = useLanguage()

  const title = isLocalizedProps(props) ? props.title[language] : props.title
  const description = isLocalizedProps(props) ? props.description[language] : props.description
  const keywords = props.keywords
    ? isLocalizedProps(props) && typeof props.keywords === "object"
      ? props.keywords[language]
      : props.keywords
    : undefined
  const ogImage = props.ogImage || "/og-image.jpg"

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="alternate" hrefLang="de" href={`https://virtual-visions.com/de`} />
      <link rel="alternate" hrefLang="en" href={`https://virtual-visions.com/en`} />
      <link rel="canonical" href={`https://virtual-visions.com/${language}`} />
    </Head>
  )
}

export default SEOMetadata

import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const SITE_TITLE = process.env.SITE_TITLE;

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: SITE_TITLE,
  images: [
    {
      url: `${getServerSideURL()}/ramon-west-software-ans-consulting-image.webp`,
    },
  ],
  siteName: SITE_TITLE,
  title: SITE_TITLE,
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}

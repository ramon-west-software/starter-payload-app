import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Ramon West Software and Consulting.',
  images: [
    {
      url: `${getServerSideURL()}/ramon-west-software-ans-consulting-image.webp`,
    },
  ],
  siteName: 'Ramon West Software and Consulting',
  title: 'Ramon West Software and Consulting',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}

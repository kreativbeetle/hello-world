import path from 'path'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { Media } from '@/lib/payload/collections/media'
import { Pages } from '@/lib/payload/collections/pages'
import { Services } from '@/lib/payload/collections/services'
import { ServiceAreas } from '@/lib/payload/collections/service-areas'
import { GalleryItems } from '@/lib/payload/collections/gallery-items'
import { Reviews } from '@/lib/payload/collections/reviews'
import { Faqs } from '@/lib/payload/collections/faqs'
import { EstimateSubmissions } from '@/lib/payload/collections/estimate-submissions'
import { Users } from '@/lib/payload/collections/users'
import { SiteSettings } from '@/lib/payload/globals/site-settings'
import { HeaderSettings } from '@/lib/payload/globals/header-settings'
import { FooterSettings } from '@/lib/payload/globals/footer-settings'
import { Homepage } from '@/lib/payload/globals/homepage'

export default buildConfig({
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-me',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(),
    },
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  collections: [Users, Media, Pages, Services, ServiceAreas, GalleryItems, Reviews, Faqs, EstimateSubmissions],
  globals: [SiteSettings, HeaderSettings, FooterSettings, Homepage],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})

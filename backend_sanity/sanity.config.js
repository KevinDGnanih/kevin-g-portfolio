import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
// import {testimonials} from './schemas/testimonials'

export default defineConfig({
  name: 'default',
  title: 'kevin-g-portfolio',

  projectId: 'sqlwo3iz',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

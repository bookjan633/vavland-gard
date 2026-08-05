import {defineField, defineType} from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Startsida',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Rubrik',
      type: 'string',
    }),

    defineField({
      name: 'lead',
      title: 'Ingress',
      type: 'text',
      rows: 4,
    }),
  ],
})

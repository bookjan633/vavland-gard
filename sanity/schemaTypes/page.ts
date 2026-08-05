import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Sidor',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Rubrik',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    
     defineField({
    name: 'heroSubtitle',
    title: 'Hero-underrubrik',
    type: 'text',
    rows: 3,
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'lead',
      title: 'Ingress',
      type: 'text',
      rows: 3,
    }),

   

    defineField({
      name: 'body',
      title: 'Brödtext',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({

  name: 'captions',

  title: 'Bildtexter',

  type: 'array',

  of: [

    defineField({

      name: 'caption',

      title: 'Bildtext',

      type: 'string',

    }),

  ],

}),
  ],
})
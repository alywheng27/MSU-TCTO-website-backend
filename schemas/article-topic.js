import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'articleTopic',
  title: 'Article Topic',
  type: 'document',
  fields: [
    defineField({
      name: 'topic',
      title: 'Topic',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'topic',
    },
  },
})

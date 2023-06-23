import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'articleSubject',
  title: 'Article Subject',
  type: 'document',
  fields: [
    defineField({
      name: 'subject',
      title: 'Subject',
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
      title: 'subject',
    },
  },
})

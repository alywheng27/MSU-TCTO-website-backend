import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'duration',
  title: 'Duration',
  type: 'document',
  fields: [
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'duration',
    },
  },
})

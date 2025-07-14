import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'graduate',
  title: 'Graduate',
  type: 'document',
  fields: [
    defineField({
      name: 'graduate',
      title: 'Graduate',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'graduate',
    },
  },
})

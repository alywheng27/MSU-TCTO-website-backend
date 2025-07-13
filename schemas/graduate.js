import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'graduate',
  title: 'Graduate',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'degree',
  title: 'Degree',
  type: 'document',
  fields: [
    defineField({
      name: 'degree',
      title: 'Degree',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'degree',
    },
  },
})

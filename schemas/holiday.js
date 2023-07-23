import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'holiday',
  title: 'Holiday',
  type: 'document',
  fields: [
    defineField({
      name: 'holiday',
      title: 'Holiday',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'holiday',
    },
  },
})

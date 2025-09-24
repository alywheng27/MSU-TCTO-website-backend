import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'level',
  title: 'Level',
  type: 'document',
  fields: [
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'level',
    },
  },
})

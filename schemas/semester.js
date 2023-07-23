import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'semester',
  title: 'Semester',
  type: 'document',
  fields: [
    defineField({
      name: 'semester',
      title: 'Semester',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'semester',
    },
  },
})

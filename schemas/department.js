import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'department',
  title: 'Department',
  type: 'document',
  fields: [
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'department',
    },
  },
})

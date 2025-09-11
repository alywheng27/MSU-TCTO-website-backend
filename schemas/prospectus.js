import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'prospectus',
  title: 'Prospectus',
  type: 'document',
  fields: [
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
  ],

  preview: {
    select: {
      title: 'department',
    },
  },
})

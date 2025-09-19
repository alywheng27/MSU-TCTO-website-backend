import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'prospectus',
  title: 'Prospectus',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: {type: 'department'},
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
      title: 'title',
    },
  },
})

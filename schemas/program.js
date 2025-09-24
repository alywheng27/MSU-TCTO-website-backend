import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: {type: 'department'},
    }),
    defineField({
      name: 'degree',
      title: 'Degree',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: {type: 'degree'},
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: {type: 'level'},
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: {type: 'duration'},
    }),
    defineField({
      name: 'accreditation',
      title: 'Accreditation',
      type: 'string',
      validation: (Rule) => Rule.required(),
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

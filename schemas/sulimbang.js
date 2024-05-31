import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sulimbang',
  title: 'Sulimbang',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      validation: (Rule) => Rule.required(),
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'MMMM D, YYYY',
        calendarTodayLabel: 'Today'
      }
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})

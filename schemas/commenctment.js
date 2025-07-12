import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'commenctment',
  title: 'Commenctment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
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
      name: 'birthDate',
      title: 'Birth Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'MMMM D, YYYY',
        calendarTodayLabel: 'Today',
      },
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
    },
  },
})

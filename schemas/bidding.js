import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bidding',
  title: 'Bidding',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
    defineField({
      name: 'dateOfPublication',
      title: 'Date of Publication',
      type: 'date',
      options: {
        dateFormat: 'MMMM D, YYYY',
        calendarTodayLabel: 'Today'
      }
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'number',
      title: 'Contact Number',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})

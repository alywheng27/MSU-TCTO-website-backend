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
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})

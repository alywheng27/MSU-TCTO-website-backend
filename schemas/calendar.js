import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'calendar',
  title: 'Calendar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM D, YYYY',
        calendarTodayLabel: 'Today'
      }
    }),
    defineField({
      name: 'semester',
      title: 'Semester',
      type: 'reference',
      to: {type: 'semester'},
    }),
    defineField({
      name: 'holiday',
      title: 'Holiday',
      type: 'reference',
      to: {type: 'holiday'},
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
    },
  },
})

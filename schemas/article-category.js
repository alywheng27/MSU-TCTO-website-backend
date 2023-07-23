import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'articleCategory',
  title: 'Article Category',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'category',
    },
  },
})

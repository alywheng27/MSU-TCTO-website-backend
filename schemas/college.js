import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'college',
  title: 'College',
  type: 'document',
  fields: [
    defineField({
      name: 'college',
      title: 'College',
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
      title: 'college',
    },
  },
})

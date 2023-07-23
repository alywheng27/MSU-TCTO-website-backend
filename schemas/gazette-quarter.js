import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gazetteQuarter',
  title: 'Gazette Quarter',
  type: 'document',
  fields: [
    defineField({
      name: 'gazetteQuarter',
      title: 'Gazette Quarter',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'gazetteQuarter',
    },
  },
})

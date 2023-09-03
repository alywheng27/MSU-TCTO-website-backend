import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'facultyAndStaff',
  title: 'Faculty And Staff',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
        name: 'teachingLevel',
        title: 'Teaching Level',
        type: 'string',
    }),
    defineField({
        name: 'advisory',
        title: 'Advisory',
        type: 'string',
    }),
    defineField({
        name: 'yearStarted',
        title: 'Year Started',
        type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})

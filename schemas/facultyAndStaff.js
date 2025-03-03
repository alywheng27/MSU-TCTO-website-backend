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
      name: 'educations',
      title: 'Educations',
      type: 'array',
      of: [{type: 'reference', to: {type: 'education'}}],
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
    defineField({
      name: 'college',
      title: 'College',
      type: 'reference',
      to: {type: 'college'},
    }),
    defineField({
      name: 'researchLink',
      title: 'Research Link',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})

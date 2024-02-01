import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: {type: 'author'},
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
      name: 'articleSubject',
      title: 'Article Subject',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: {type: 'articleSubject'},
    }),
    defineField({
      name: 'college',
      title: 'College',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: {type: 'college'},
    }),
    defineField({
      name: 'topic',
      title: 'Topic',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: {type: 'articleTopic'},
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: {type: 'articleCategory'},
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
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
      name: 'featured',
      title: 'Featured article',
      type: 'boolean',
      initialValue: false,
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
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})

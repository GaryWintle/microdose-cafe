import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Navigation Title',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Nav Items',
      type: 'array',
      of: [
        defineType({
          name: 'navLink',
          type: 'object',
          title: 'Nav Link',
          fields: [
            {name: 'label', title: 'Label', type: 'string'},
            {name: 'url', title: 'URL', type: 'string'},
          ],
        }),
      ],
    }),

    // ✅ This must go INSIDE the fields array, just like above
    defineField({
      name: 'cta',
      title: 'CTA Link',
      type: 'object',
      fields: [
        {name: 'label', title: 'Label', type: 'string'},
        {name: 'url', title: 'URL', type: 'string'},
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})

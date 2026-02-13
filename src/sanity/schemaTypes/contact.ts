import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  initialValue: {
    _type: 'contact',
  },
  preview: {
    select: {
      title: 'contactTitle',
      media: 'contactImage',
    },
    prepare(selection) {
      return {
        title:  'Contact Page',
        subtitle: selection.title?.substring(0, 50),
        media: selection.media,
      }
    },
  },
  fields: [
  
    defineField({
      name: 'contactImage',
      title: 'Contact Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

      defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'contactTitle',
      title: 'Contact Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ContactText',
      title: 'Contact Text',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber1',
      title: 'Phone Number 1',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber2',
      title: 'Phone Number 2',
      type: 'string',
    }),
    defineField({
      name: 'emailAddress1',
      title: 'Email Address 1',
      type: 'string',
    }),
    defineField({
      name: 'emailAddress2',
      title: 'Email Address 2',
      type: 'string',
    }),
  ],
})

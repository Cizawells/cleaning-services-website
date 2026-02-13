import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  initialValue: {
    _type: 'homepage',
  },
  preview: {
    select: {
      title: 'heroText',
      media: 'heroImage',
    },
    prepare(selection) {
      return {
        title: 'Homepage',
        subtitle: selection.title?.substring(0, 50),
        media: selection.media,
      }
    },
  },
  fields: [
    defineField({
      name: 'heroText',
      title: 'Hero Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'urgentServiceImage',
      title: 'Urgent Service Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'UrgentServiceTitle',
      title: 'Urgent Service Title',
      type: 'string',
    }),
    defineField({
      name: 'UrgentServiceText',
      title: 'Urgent Service Text',
      type: 'string',
    }),
    defineField({
      name: 'aboutUsImage',
      title: 'About Us Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'aboutUsTitle',
      title: 'About Us Title',
      type: 'string',
    }),
    defineField({
      name: 'aboutUsText',
      title: 'About Us Text',
      type: 'string',
    }),
    defineField({
      name: 'aboutusGaller',
      title: 'About Us Gallery',
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
      name: 'faqTitle',
      title: 'FAQ Title',
      type: 'string',
    }),
    defineField({
      name: 'faqText',
      title: 'FAQ Text',
      type: 'string',
    }),
    defineField({
      name: 'faqVideoId',
      title: 'FAQ Video ID',
      type: 'string',
      description: 'YouTube or Vimeo video ID',
    }),
    defineField({
      name: 'faqVideoThumbnail',
      title: 'FAQ Video Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})

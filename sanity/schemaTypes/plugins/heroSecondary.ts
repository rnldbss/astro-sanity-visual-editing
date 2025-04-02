import { defineField, defineType } from "sanity";

import {DocumentTextIcon} from '@sanity/icons'

export const heroSecondaryType = defineType({
    name: 'heroSecondary',
    type: 'object',
    title: 'Hero secondary',
    icon: DocumentTextIcon,
    fields: [
        defineField({
         name: 'heading',
        type: 'string',
    }),
        defineField({
        name: 'tagline',
        type: 'string',
    }),
        defineField({
            name: 'launchYear',
            type: 'string'
        })
        ,
        defineField({
            name: 'mainImage',
            type: 'customImage'
        })
    ],
    preview: {
    select: {
      title: 'heading',
      image: 'mainImage',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Hero',
        media: image || DocumentTextIcon,
      }
    },
  },
})
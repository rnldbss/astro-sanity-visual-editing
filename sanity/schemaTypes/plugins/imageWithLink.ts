import { defineArrayMember, defineField, defineType } from 'sanity';

import {ImageIcon} from '@sanity/icons'

export const imageWithLinkType = defineType({
  name: 'imageWithLink',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'link',
      type: 'url'
    }), 
    
    defineField({
      name: 'image',
      type: 'customImage'
    }),
  ],
  preview: {
    select: {
      title: 'link',
      media: 'image',
    },
}
});

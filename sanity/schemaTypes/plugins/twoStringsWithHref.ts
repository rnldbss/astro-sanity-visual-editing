import { defineArrayMember, defineField, defineType } from 'sanity';

import {DotIcon} from '@sanity/icons'

export const twoStringsWithUrlType = defineType({
  name: 'twoStringsWithUrl',
  type: 'object',
  title: 'Two Strings with URL',
  icon: DotIcon,
  fields: [
    defineField({
      name: 'itemOne',
      type: 'string'
    }), 
    
    defineField({
      name: 'itemTwo',
      type: 'string'
    }),
    defineField({
      name: 'urlType',
      title: 'URL Type',
      type: 'string',
      options: {
        list: [
          { title: 'External URL', value: 'external' },
          { title: 'File Upload', value: 'file' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({
      name: 'url',
      title: 'External URL',
      type: 'string',
      hidden: ({ parent }) => parent?.urlType !== 'external',
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      hidden: ({ parent }) => parent?.urlType !== 'file',
    }),
  ],
  preview: {
    select: {
      title: 'itemOne',
      subtitle: 'itemTwo',
    },
}
});

import { defineArrayMember, defineField, defineType } from 'sanity';

import {DotIcon} from '@sanity/icons'

export const twoStringsType = defineType({
  name: 'twoStrings',
  type: 'object',
  title: 'Two Strings',
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
  ],
  preview: {
    select: {
      title: 'itemOne',
      subtitle: 'itemTwo',
    },
}
});

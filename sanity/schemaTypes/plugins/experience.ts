import {defineArrayMember, defineField, defineType} from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  type: 'object',
  title: 'Experience',
  fields: [
     defineField({
      name: "logo",
      type: "customImage",
    }),
     defineField({
      name: "company",
      type: "string",
    }),
     defineField({
      name: "position",
      type: "string",
    }),
     defineField({
      name: "date",
      type: "string",
    }),
     defineField({
      name: "body",
      type: "blockContent",
    }),
  
  ],
})
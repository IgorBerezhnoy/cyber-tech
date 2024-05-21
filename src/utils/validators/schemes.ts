import { z } from 'zod'

export const schemaOrder = z.object({
  category: z.string().optional(),
  comment: z.string().max(200).optional(),
  file: z
    .object({
      format: z.string().regex(/\.pdf$/),
      size: z.number().max(5 * 1024 * 1024),
    })
    .optional(),
  fullName: z.string().min(10).max(30),
  isAccreditation: z.boolean().optional(),
  rating: z
    .string()
    .refine(val => /^\d+$/.test(val) && parseInt(val) >= 1 && parseInt(val) <= 100, {
      message: 'Rating must be a number between 1 and 100',
    }),
  sum: z.string(),
})

export type SchemaOrderType = z.infer<typeof schemaOrder>

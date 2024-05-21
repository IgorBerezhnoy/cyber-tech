import { z } from 'zod'

export const schemaOrder = z.object({
  category: z.string({ message: 'Выберите категорию' }),
  comment: z
    .string()
    .max(200, { message: 'Комментарий должен быть не более 200 символов' })
    .optional(),
  file: z.string().optional(),
  fullName: z
    .string({ message: 'Заполните полное имя' })
    .min(10, { message: 'Полное имя должно быть не менее 10 символов' })
    .max(30, { message: 'Полное имя должно быть не более 30 символов' }),
  isAccreditation: z.boolean().optional(),
  rating: z
    .string({ message: 'Заполните рейтинг' })
    .refine(val => /^\d+$/.test(val) && parseInt(val) >= 1 && parseInt(val) <= 100, {
      message: 'Rating must be a number between 1 and 100',
    }),
  sum: z.string({ message: 'Заполните сумму' }).regex(/^\d{1,6}\.\d{2}$/, {
    message: 'Сумма должна содержать 6 знаков до точки и 2 знака после точки',
  }),
})

export type SchemaOrderType = z.infer<typeof schemaOrder>

import { z } from 'zod'

export const ContactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().max(150).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000)
})

export type ContactInput = z.infer<typeof ContactSchema>

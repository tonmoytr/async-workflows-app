import { z } from 'zod'

export const ContactSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message should be more descriptive'),
})

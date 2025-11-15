'use client'

import { FormType } from '@/constants/types'
import { z } from 'zod'

export const createAuthSchema = (type: FormType) => {
  const authSchema = z.object({
    username: z
      .string()
      .min(2, 'Username must be at least 2 characters.')
      .max(25, 'Username must not be more than 25 characters.'),
    email:
      type == 'signup' ? z.string().email() : z.string().email().optional(),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters.')
      .max(20, 'Password must not be more than 20 characters.')
  })

  return authSchema;
}

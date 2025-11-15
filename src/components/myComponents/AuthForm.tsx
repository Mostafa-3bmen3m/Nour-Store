'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { createAuthSchema } from '@/schemas/schemas'
import { FormType } from '@/constants/types'
import Link from 'next/link'
import Header from './Header'

export default function AuthForm ({ type }: { type: FormType }) {
  const authSchema = createAuthSchema(type)

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  })

  const onSubmit = (formData: z.infer<typeof authSchema>) => {
    console.log()
  }

  return (
    <>
      <Header />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 w-[300px]'
        >
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type='text' placeholder='Username' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {type == 'signup' && (
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type='email' placeholder='Email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='Password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='w-full my-5 text-center'>
            {type == 'signup' ? (
              <p>
                Already Have An Account?{' '}
                <Link href='/auth/login'>
                  <span className='text-blue-500 colorful:text-black'> Login</span>
                </Link>
              </p>
            ) : (
              <p>
                Don't Have An Account?{' '}
                <Link href='/auth/signup'>
                  <span className='text-blue-500 colorful:text-black'> Signup</span>
                </Link>
              </p>
            )}
          </div>
          <Button className='w-full' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </>
  )
}

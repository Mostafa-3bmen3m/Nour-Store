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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from '@/components/ui/input'
import { createAuthSchema } from '@/schemas/schemas'
import { FormType } from '@/constants/types'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

import { useRouter } from 'next/navigation'

export default function AuthForm({ type }: { type: FormType }) {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

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
    console.log(formData)
    router.push('/')
  }

  return (
    <Card className="w-[350px] shadow-lg border-border/50 bg-card/95 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {type === 'login' ? 'Welcome Back' : 'Create Account'}
        </CardTitle>
        <CardDescription className="text-center">
          {type === 'login'
            ? 'Enter your credentials to access your account'
            : 'Enter your details to create a new account'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-4'
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
                  <div className='relative'>
                    <FormControl>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        {...field}
                      />
                    </FormControl>
                    {showPassword ? (
                      <EyeOff
                        className='absolute right-2 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer hover:text-foreground transition-colors'
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <Eye
                        className='absolute right-2 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer hover:text-foreground transition-colors'
                        onClick={() => setShowPassword(true)}
                      />
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='w-full mt-4' type='submit'>
              {type === 'login' ? 'Login' : 'Sign Up'}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center">
        {type == 'signup' ? (
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href='/auth/login' className='text-primary hover:underline font-medium'>
              Login
            </Link>
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link href='/auth/signup' className='text-primary hover:underline font-medium'>
              Sign up
            </Link>
          </p>
        )}
      </CardFooter>
    </Card>
  )
}

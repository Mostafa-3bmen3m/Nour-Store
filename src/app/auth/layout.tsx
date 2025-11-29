import React from 'react'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <div className='h-screen w-screen flex justify-center items-center colorful:bg-linear-to-br from-pink-500 via-violet-500 to-teal-400'>
    {children}
  </div>
}

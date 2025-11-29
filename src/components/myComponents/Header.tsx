'use client'

import { ThemeType } from '@/constants/types'
import { useLocalStorageState } from 'ahooks'
import { Moon, Palette, Sun, LogIn } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [theme, setTheme] = useLocalStorageState<ThemeType>('theme', { defaultValue: 'light' })

  useEffect(() => {
    if (theme === 'dark' || theme === 'colorful') {
      document.documentElement.classList.remove(
        document.documentElement.classList.contains('dark')
          ? 'dark'
          : 'colorful'
      )
      document.documentElement.classList.add(theme)
    } else {
      document.documentElement.classList.remove(
        document.documentElement.classList.contains('dark')
          ? 'dark'
          : 'colorful'
      )
    }
  }, [theme])

  return (
    <header className='fixed top-0 left-0 right-0 flex justify-between items-center p-4 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-all'>
      <div>
        <h1 className='text-foreground text-3xl font-bold tracking-tight'>Kids Store</h1>
      </div>
      <div className='flex items-center gap-4'>
        <Button asChild variant="ghost" className="text-foreground hover:text-primary transition-colors">
          <Link href="/auth/login" className="flex items-center gap-2">
            <LogIn className="w-4 h-4" />
            Login
          </Link>
        </Button>

        <div className="flex gap-2">
          <button
            aria-label='Light mode'
            className='group relative p-2 rounded-xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50'
            onClick={() => setTheme('light')}
          >
            <Sun className='w-5 h-5 text-yellow-500 group-hover:text-yellow-600 transition-colors' />
            <span className='sr-only'>Light Mode</span>
          </button>

          <button
            aria-label='Dark mode'
            className='group relative p-2 rounded-xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50'
            onClick={() => setTheme('dark')}
          >
            <Moon className='w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors' />
            <span className='sr-only'>Dark Mode</span>
          </button>

          <button
            aria-label='Colorful mode'
            className='group relative p-2 rounded-xl bg-linear-to-br from-pink-500 via-purple-500 to-indigo-500 shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2'
            onClick={() => setTheme('colorful')}
          >
            <Palette className='w-5 h-5 text-white drop-shadow-sm group-hover:drop-shadow-md transition-all' />
            <span className='sr-only'>Colorful Mode</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

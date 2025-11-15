'use client'

import { ThemeType } from '@/constants/types'
import { useLocalStorageState } from 'ahooks'
import { Moon, Palette, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const Header = () => {
  const [theme, setTheme] = useLocalStorageState<ThemeType>('theme' , {defaultValue : 'light'})

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
    <div className='fixed top-0 left-0 right-0 flex justify-between p-5'>
      <div>
        <h1 className='text-black dark:text-white text-3xl'>Kids Store</h1>
      </div>
      <div className='flex'>
        <button
          aria-label='Light mode'
          className='group relative p-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          onClick={() => setTheme('light')}
        >
          <Sun className='w-5 h-5 text-yellow-500 group-hover:text-yellow-600 transition-colors' />
          <span className='sr-only'>Light Mode</span>
        </button>

        <button
          aria-label='Dark mode'
          className='group relative p-3 rounded-xl bg-gray-900 border border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900'
          onClick={() => setTheme('dark')}
        >
          <Moon className='w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors' />
          <span className='sr-only'>Dark Mode</span>
        </button>

        <button
          aria-label='Colorful mode'
          className='group relative p-3 rounded-xl bg-linear-to-br from-pink-500 via-purple-500 to-indigo-500 shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2'
          onClick={() => setTheme('colorful')}
        >
          <Palette className='w-5 h-5 text-white drop-shadow-sm group-hover:drop-shadow-md transition-all' />
          <span className='sr-only'>Colorful Mode</span>
        </button>
      </div>
    </div>
  )
}

export default Header

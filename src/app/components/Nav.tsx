'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaBasketball } from 'react-icons/fa6'
import {
  HiHome,
  HiUser,
  HiEnvelope,
  HiViewColumns,
} from 'react-icons/hi2'

export const navData = [
  { name: 'home', path: '/', icon: <HiHome/>},
  { name: 'about', path: '/about', icon: <HiUser/>},
  { name: 'work', path: '/work', icon: <HiViewColumns/>},
  { name: 'basketball', path: '/bball', icon: <FaBasketball/>},
  { name: 'contact', path: '/contact', icon: <HiEnvelope/>},
]

export const Nav = () => {
  const pathname = usePathname();
  console.log("------------pathname is :", pathname)
  

  return <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen '>
    <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80%] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
      {navData.map((link, index) => {
        return (
          <Link 
          className={`${
            link.path === pathname && 'text-accent'
          } relative flex items-center group hover:text-accent transition-all duration-300`} 
          href={link.path} 
          key={index}>
            <div>{link.icon}</div>
          </Link>
        )
      })}
    </div>
  </nav>;
}
import { Description, Hero } from '@/components/home'
import React from 'react'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Hero />
      <Description />
      {children}
    </>
  )
}

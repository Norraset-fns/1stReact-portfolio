import React from 'react'
import NavBar from '../components/NavBar'
import HeroBanner from '../components/HeroBanner'

export default function About() {
  return (
    <div className="min-h-screen bg-blue-900">
         <NavBar />

        <HeroBanner />
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-3xl font-bold text-white">เกี่ยวกับเรา</h1>
        </div>
      </div>
  )
}

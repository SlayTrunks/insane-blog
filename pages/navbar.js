import NavLink from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <nav className="bg-white shadow dark:bg-gray-700">
    <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <NavLink href="/" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 text-pink-300 hover:border-blue-500 mx-1.5 sm:mx-6  ">home</NavLink>

        <NavLink href="/addblog" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 text-pink-300 hover:border-blue-500 mx-1.5 sm:mx-6">Add Blog</NavLink>

        <NavLink href="/contact" className=" text-pink-300 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contact Us</NavLink>

        

        
    </div>
</nav>
  )
}

export default navbar
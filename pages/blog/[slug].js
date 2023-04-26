import { useRouter } from 'next/router'
import React, { useState , useEffect } from 'react'
import Loader from '../Loader'
import Link from 'next/link'


const Slug = () => {
    const router = useRouter()
    const {slug} = useRouter().query
    const [blog, setBlog] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      if (router.query.slug) {
        fetch(`/api/getid/${router.query.slug}`)
          .then((res) => res.json())
          .then((data) => setBlog(data));
        setLoading(false);
      }
    }, [router]);
    console.log(blog);
    const handleClick1 = () =>{
        fetch(`/api/getid/${router.query.slug}`,{
            method:'DELETE'
        }).then(res=>res.json())
        .then(data=>console.log(data))
        router.push('/')
    }
    if(loading){
        return <Loader/>
    }
 else{
    return (
        <section className="flex flex-col justify-center antialiased bg-gray-900 text-pink-300 min-h-screen">
        <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
        
            <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                <a className="relative block group" >
                    <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                    <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                        <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={blog.image} width="540" height="303" alt="Blog post"/>
                    </figure>
                </a>
                <div>
                    <header>
                        <div className="mb-3">
                            <ul className="flex flex-wrap text-xs font-medium -m-1">
                                <li className="m-1">
                                    <Link href={`/edit/${slug}`} className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 cursor-pointer hover:bg-purple-700 transition duration-150 ease-in-out" >Edit</Link>
                                </li>
                                <li className="m-1">
                                    <a onClick={handleClick1} className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out cursor-pointer" >Delete</a>
                                </li>
                            </ul>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                            <a className="hover:text-gray-100 transition duration-150 capitalize ease-in-out" >{blog.title}</a>
                        </h3>
                    </header>
                    <p className="text-lg text-pink-400 flex-grow">{blog.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quo iste voluptatem sint rerum. Nam, libero? Nihil voluptatibus libero dolorem?</p>
                    <footer className="flex items-center mt-4">
                        <a >
                            <img className="rounded-full flex-shrink-0 mr-4" src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg" width="40" height="40" alt="Author 04"/>
                        </a>
                        <div>
                            <a href='https://github.com/slaytrunks' target='_blank'  className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out cursor-pointer" >Slay Trunks </a>
                            
                        </div>
                    </footer>
                </div>
            </article>    
        </div>
    </section>
    
    
      )
 }
}

export default Slug
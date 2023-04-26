import Link from "next/link"
import Home from "./index"

const BlogItem = ({image,title,description,id}) => {
  return (
   
            <div key={id} className="w-full text-black rounded-2xl bg-gray-400  shadow-md lg:max-w-sm">
            <img
                className="object-cover w-full h-48"
                src={image}
                alt="image"
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-pink-600">
                    {title}
                </h4>
                <p className="mb-2 leading-normal">
                    {description}
                </p>
                <a href={`/blog/${id}`}  className="px-4 py-2 text-sm text-blue-100 hover:bg-pink-500 bg-pink-400 rounded shadow">
                    Read more
                </a>
            </div>
        </div>
  )
}
export default BlogItem
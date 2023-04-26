import { useRouter } from "next/router";
import React, { useState } from "react";

const addBlog = () => {
  const router = useRouter()
  const {slug} = useRouter().query
  const [text, setText] = useState({
    title: "",
    image: "",
    description: "",
  });
  const handleChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    fetch(`/api/getid/${router.query.slug}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(text)
    }).then(res=>res.json)
    .then(data=>console.log(data)).then(alert('Blog edited successfully')
    )
    router.push(`/`)

    setText({
      title: "",
      image: "",
      description: "",
    })
  }
  return (
    <div className="flex align-middle flex-col mx-64">
      <h1 className="mt-10 font-bold text-lg  mx-auto text-pink-500">
        Edit Blog
      </h1>
      <br />
      <br />
      <span className="mx-5 text-pink-500">Title</span>
      <input
        type="text"
        className="bg-gray-100 py-3 rounded-lg px-auto text-pink-700"
        value={text.title}
        onChange={handleChange}
        name="title"
      />
      <br />
      <span className=" text-pink-500 mx-5"> Image</span>
      <input
        type="text"
        className="bg-gray-100 py-3 rounded-lg px-auto text-pink-700"
        value={text.image}
        onChange={handleChange}
        name="image"
      />
      <br />

      <span className="mx-5 text-pink-500">Description</span>
      <textarea
        id=""
        cols="70 "
        className="bg-gray-100 text-pink-500 py-3 rounded-lg px-auto"
        rows="6"
        value={text.description}
        onChange={handleChange}
        name="description"
      ></textarea>

      <input
        onClick={handleSubmit}
        type="submit"
        className="bg-pink-400 text-white  mx-auto py-2 px-4 rounded-lg"
      />
    </div>
  );
};

export default addBlog;
import React from 'react'
import Image from 'next/image'
import { posts } from '@/constant/posts'
import Link from 'next/link'

const Hero = () => {
  const featuredPost = posts.filter((post) => post.featured === true)

  const topPost = featuredPost.slice(0, 2)

  const bottomPost = featuredPost.slice(2, 5)

  return (
    <section className="py-5">
      <div className="wrapper">
        <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-x-0 md:gap-x-6 gap-5">
          {topPost.map((post, index) => (
            <div
              key={index}
              className="md:px-0 md:col-span-2 lg:col-span-3 overflow-hidden rounded-md shadow"
            >
              <div className="relative overflow-hidden w-full">
                <div className="absolute h-full w-full bg-black/20" />
                <div className="absolute p-5 w-full h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div className="">
                      <h2 className="text-white text-3xl font-bold mb-2 px-1">
                        {post.title}
                      </h2>
                      <span className="text-gray-50 bg-sky-500 rounded-md px-2">
                        {post.tags}
                      </span>
                    </div>

                    <div className="text-white font-bold text-sm flex flex-col gap-1">
                      <span>{post.publishDate}</span>
                    </div>
                  </div>
                </div>

                <Image
                  src={post.image_url}
                  alt="Blog Picture"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-0 md:gap-x-6 gap-5">
          {bottomPost.map((post, index) => (
            <div
              key={index}
              className="md:px-0 relative rounded-md overflow-hidden shadow"
            >
              <div className="relative overflow-hidden w-full">
                <div className="absolute h-full w-full bg-black/20" />
                <div className="absolute p-5 w-full h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div className="">
                      <h2 className="text-white text-3xl font-bold mb-2 px-1">
                        {post.title}
                      </h2>
                      <span className="text-gray-50 bg-sky-500 rounded-md px-2">
                        {post.tags}
                      </span>
                    </div>

                    <div className="text-white font-bold text-sm flex flex-col gap-1">
                      <span>{post.publishDate}</span>
                    </div>
                  </div>
                </div>

                <Image
                  src={post.image_url}
                  alt="Blog Picture"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

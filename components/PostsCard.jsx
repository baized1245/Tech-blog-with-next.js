import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsArrowRightShort } from 'react-icons/bs'

const PostsCard = ({ post, index }) => {
  return (
    <div
      key={index}
      className="dark:bg-dark rounded-md overflow-hidden shadow-xl"
    >
      <div className="w-full flex">
        <Image
          src={post.image_url}
          width={900}
          height={900}
          alt="Blog Image"
          className="rounded-md object-cover"
        />
      </div>

      <div className="p-3">
        <div className="px-3 inline-block text-gray-50 bg-sky-500 rounded-md whitespace-nowrap">
          {post.tags}
        </div>

        <div className="text-xl mt-3 text-gray-900 font-bold dark:text-white">
          {post.title}
        </div>
        <p className="mt-3 dark:text-white text-gray-900 text-sm">
          {post.paragraph.substring(0, 150) +
            (post.paragraph.length > 150 ? '...' : '')}
        </p>

        <div className="flex mt-3 gap-3 items-center">
          <Image
            src={post.authorImage}
            width={40}
            height={40}
            alt="Auth-Image"
            className="rounded-full object-cover w-10 h-10 border-2 border-sky-500"
          />

          <div className="flex gap-2 dark:text-white text-gray-500 text-sm">
            <span>{post.authorName}</span>
            <span>.</span>
            <span>5 min read</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostsCard

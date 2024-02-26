import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const LinkItem = ({ route, label, isActive }) => {
  return (
    <Link
      href={route}
      className={clsx(
        'px-3 py-1',
        isActive && 'bg-sky-500 text-white rounded-md'
      )}
    >
      {label}
    </Link>
  )
}

export default LinkItem

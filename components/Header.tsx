import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
        <div>
<Link href={'/'}>

<Image className='rounded-full' src="https://i.imgur.com/a8ccvyU.png" width={50} height={50} alt="logo" />
</Link>
<h1>EL Blog</h1>

        </div>
        <div></div>
    </header>
  )
}

export default Header
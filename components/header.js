import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

const header = () => {
    return (
        <div className='flex justify-center items-center sticky top-0 z-50'>
            <Link href="/">
                <Image
                    className='rounded-full mt-0.5'
                    src="/images/logo.png"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                />
            </Link>
        </div>
    )
}

export default header
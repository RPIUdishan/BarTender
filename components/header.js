import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

const header = () => {
    return (
        <div className='flex justify-center items-center mt-0.5'>
            <Link href="/">
                <Image
                    className='rounded-full'
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
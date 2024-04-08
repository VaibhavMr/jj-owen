import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div>
            <div className='md:py-5 py-7 md:px-20 px-36'>
                <Image
                    src="/Logo.png"
                    width="155"
                    height="75"
                    className="cursor-pointer"
                    priority
                />
            </div>
        </div>
    )
}

export default Navbar

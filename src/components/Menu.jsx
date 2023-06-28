'use client'

import { useState } from 'react'
import Link from 'next/link'
import { GameIconsConvergenceTarget, GameIconsHamburgerMenu, SolarMapArrowRightBold } from './Icons'
import SocialIcons from './SocialIcons'

const Menu = () => {
    const [isToggled, setIsToggled] = useState(false)

    const [isHoveredHome, setIsHoveredHome] = useState(false)
    const [isHoveredLaws, setIsHoveredLaws] = useState(false)
    const [isHoveredStore, setIsHoveredStore] = useState(false)
    const [isHoveredEbooks, setIsHoveredEbooks] = useState(false)
    const [isHoveredCredits, setIsHoveredCredits] = useState(false)

    // if isHovered, then show icon

    // console.log('isToggledState', isToggled)

    return (
        <div className=''>
            {isToggled ? (
                <div>
                    <div className='absolute z-[100] h-screen w-screen bg-[#fcf9ea]'>
                        <GameIconsConvergenceTarget
                            onClick={() => setIsToggled(false)}
                            className='absolute right-2 top-2 z-[100] cursor-pointer text-2xl'
                        />
                        <div className='flex h-full w-full flex-col items-center justify-center'>
                            <ul className='flex flex-col gap-16 font-serif text-4xl font-bold uppercase'>
                                <Link
                                    href='/'
                                    className='flex justify-between hover:italic hover:text-stone-700'
                                    onMouseEnter={() => setIsHoveredHome(true)}
                                    onMouseLeave={() => setIsHoveredHome(false)}
                                >
                                    <li className=''>Home</li>
                                    {isHoveredHome && <SolarMapArrowRightBold />}
                                </Link>
                                <Link
                                    href='/laws'
                                    className='flex justify-between hover:italic hover:text-stone-700'
                                    onMouseEnter={() => setIsHoveredLaws(true)}
                                    onMouseLeave={() => setIsHoveredLaws(false)}
                                >
                                    <li className=''>The Laws</li>
                                    {isHoveredLaws && <SolarMapArrowRightBold />}
                                </Link>
                                <a
                                    href='https://www.etsy.com/shop/LawOfTheUniverse'
                                    target='_blank'
                                    className='flex justify-between hover:italic hover:text-stone-700'
                                    onMouseEnter={() => setIsHoveredStore(true)}
                                    onMouseLeave={() => setIsHoveredStore(false)}
                                >
                                    <li className=''>Store</li>
                                    {isHoveredStore && <SolarMapArrowRightBold />}
                                </a>
                                <Link
                                    href='/ebooks'
                                    className='flex justify-between hover:italic hover:text-stone-700'
                                    onMouseEnter={() => setIsHoveredEbooks(true)}
                                    onMouseLeave={() => setIsHoveredEbooks(false)}
                                >
                                    <li className=''>Ebooks</li>
                                    {isHoveredEbooks && <SolarMapArrowRightBold />}
                                </Link>
                                <Link
                                    href='/credits'
                                    className='flex justify-between hover:italic hover:text-stone-700'
                                    onMouseEnter={() => setIsHoveredCredits(true)}
                                    onMouseLeave={() => setIsHoveredCredits(false)}
                                >
                                    <li className=''>Credits</li>
                                    {isHoveredCredits && <SolarMapArrowRightBold />}
                                </Link>
                                {/* Search Bar */}
                                <input
                                    id=''
                                    type='search'
                                    name=''
                                    className='rounded-full bg-black px-8 py-4 font-mono text-3xl italic text-white'
                                    placeholder='search...'
                                    disabled
                                />
                                {/* Social Icons */}
                                <div class='flex justify-center text-3xl'>
                                    <SocialIcons />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <GameIconsHamburgerMenu
                    onClick={() => setIsToggled(true)}
                    className='absolute right-2 top-2 z-[100] cursor-pointer text-2xl'
                />
            )}
        </div>
    )
}

export default Menu

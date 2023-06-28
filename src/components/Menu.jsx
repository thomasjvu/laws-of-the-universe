'use client'

import { useState } from "react"
import Link from "next/link"
import { GameIconsConvergenceTarget, GameIconsHamburgerMenu } from "./Icons"
import SocialIcons from "./SocialIcons"

const Menu = () => {

    const [isToggled, setIsToggled] = useState(false)

    console.log('isToggledState', isToggled)

    return (
        <div className="">
            {isToggled ? (
                <div>
                    <div className="absolute w-screen h-screen bg-[#fcf9ea] z-[100]">
                        <GameIconsConvergenceTarget onClick={() => setIsToggled(false)} className="text-2xl cursor-pointer absolute top-2 right-2 z-[100]" />
                        <div className="flex flex-col w-full justify-center items-center h-full">
                            <ul className="flex flex-col gap-16 text-4xl font-serif uppercase font-bold">
                                <Link href="/" className="hover:italic">
                                    <li className="hover:text-stone-700">Home</li>
                                </Link>
                                <Link href="/laws" className="hover:italic">
                                    <li className="hover:text-stone-700">The Laws</li>
                                </Link>
                                <a href="https://www.etsy.com/shop/LawOfTheUniverse" target="_blank" className="hover:italic">
                                    <li className="hover:text-stone-700">Store</li>
                                </a>
                                <Link href="/credits" className="hover:italic">
                                    <li className="hover:text-stone-700">Credits</li>
                                </Link>
                                {/* Search Bar */}
                                <input id="" type="search" name="" className="text-3xl rounded-full bg-black text-white px-8 py-4 font-mono italic" placeholder="search..." disabled />
                                {/* Social Icons */}
                                <div class="flex justify-center text-3xl">
                                    <SocialIcons />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            ): (
                <GameIconsHamburgerMenu onClick={() => setIsToggled(true)} className="text-2xl cursor-pointer absolute top-2 right-2 z-[100]" />
            )}
        </div>
    )
}

export default Menu


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
                            <ul className="flex flex-col gap-16">
                                <Link href="/">
                                    <li className="text-2xl uppercase font-display hover:text-stone-700">Home</li>
                                </Link>
                                <Link href="/laws">
                                    <li className="text-2xl uppercase font-display hover:text-stone-700">Laws</li>
                                </Link>
                                <Link href="/store">
                                    <li className="text-2xl uppercase font-display hover:text-stone-700">Store</li>
                                </Link>
                                <Link href="/credits">
                                    <li className="text-2xl uppercase font-display hover:text-stone-700">Credits</li>
                                </Link>
                                {/* Search Bar */}
                                <input id="" type="search" name="" className="rounded-full bg-black text-white px-8 py-4" placeholder="search..."/>
                                {/* Social Icons */}
                                <div class="flex justify-center">
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


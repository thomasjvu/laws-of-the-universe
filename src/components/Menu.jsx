'use client'

import { useState } from "react"
import Link from "next/link"
import { GameIconsConvergenceTarget, GameIconsHamburgerMenu } from "./Icons"

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
                            <ul className="flex flex-col gap-8">
                                <Link href="/">
                                    <li className="text-2xl uppercase font-display">Home</li>
                                </Link>
                                <Link href="/">
                                    <li className="text-2xl uppercase font-display">About</li>
                                </Link>
                                <Link href="/">
                                    <li className="text-2xl uppercase font-display">Random</li>
                                </Link>
                                <Link href="/">
                                    <li className="text-2xl uppercase font-display">Store</li>
                                </Link>
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


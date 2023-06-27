import Menu from "@/components/Menu"

const Page = () => {
    return (
        <>
            <Menu />
            <main className='flex h-screen w-screen flex-col items-center justify-center gap-10'>
                <h1 className='font-display text-5xl uppercase'>Credits:</h1>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col'>
                        <h2 className='font-serif text-2xl font-extrabold'>3D Assets</h2>
                        <p className='font-serif'>
                            <a href='https://skfb.ly6TXZB' className='underline'>
                                Lemuria Sound Temple
                            </a>{' '}
                            is licensed under{' '}
                            <a href='http://creativecommons.org/licenses/by/4.0' className='underline'>
                                Creative Commons Attribution
                            </a>
                            .
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='font-serif text-2xl font-extrabold'>Fonts</h2>
                        <p className='font-serif'>
                            <a href='https://github.com/calcom/font' target="blank" className='underline'>
                                Cal Sans
                            </a>
                            : Sans
                            <br />
                            <a href='https://fonts.google.com/specimen/Crimson+Text' className='underline'>
                                Crimson
                            </a>
                            : Serif
                            <br />
                            <a href='https://fonts.google.com/specimen/Ubuntu+Mono' className='underline'>
                                Ubuntu Mono
                            </a>
                            : Monospace
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='font-serif text-2xl font-extrabold'>Web Development</h2>
                        <p className='font-serif'>
                            The{' '}
                            <a href='/' className='link underline'>
                                Laws of the Universe
                            </a>{' '} website
                            is created by:{' '}
                            <a href='https://thomasjvu.com' className='link underline'>
                                @thomasjvu
                            </a>{' '}
                            of{' '}
                            <a href='https://ultima.gg' target='_blank' className="link underline">
                                Ultima.gg
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Page

'use client'

import Menu from '@/components/Menu'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const Lemuria = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Lemuria), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => (
        <div className='flex h-96 w-full flex-col items-center justify-center'>
            <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                />
            </svg>
        </div>
    ),
})

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
    const [animatedText, setAnimatedText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const text =
        '  When a person is open-minded, receptive, and aligned with the flow of the universe, they are more likely to encounter unexpected and positive synchronicities or meaningful coincidences.'

    // fetch from DB
    const getData = async () => {
        const query = await fetch('/api/laws')
        const response = await query.json()
        // console.log('Response from API', response)
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        let typingTimeout

        function typeText() {
            if (currentIndex < text.length) {
                setAnimatedText((prevText) => prevText + text[currentIndex])
                setCurrentIndex((prevIndex) => prevIndex + 1)
                typingTimeout = setTimeout(typeText, 2000)
            }
        }

        typeText()

        return () => {
            if (typingTimeout) {
                // Clear the typing timeout when the component is unmounted
                clearTimeout(typingTimeout)
            }
        }
    }, [currentIndex])

    return (
        <>
            <Menu />
            <div className='mx-auto flex max-h-screen w-full flex-col flex-wrap items-center md:flex-row lg:w-4/5'>
                <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
                    <p className='w-full font-mono uppercase'>Law of the Universe #27</p>
                    <h1 className='my-4 font-display text-5xl font-bold leading-tight'>SERENDIPITY</h1>
                    <p className='mb-8 font-serif text-2xl italic leading-normal'>The Law of Serendipity</p>
                </div>
            </div>
            <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
                <p className='animated-text mb-8 font-serif text-3xl leading-normal'>{animatedText}</p>
            </div>
            <div className='mx-auto flex h-1/2 w-full flex-col flex-wrap items-end justify-between font-mono md:flex-row lg:w-4/5'>
                <button>Previous</button>
                <button>Next</button>
            </div>

            <View className='absolute top-0 z-[-1] flex h-[90%] w-full flex-col items-center justify-center'>
                <Lemuria
                    scale={0.25}
                    position={[0, -1.5, 0]}
                    rotation={[0.0, 0, 0]}
                    route='/'
                    className='cursor-pointer'
                />
                <Common color='' />
            </View>
            {/* use json to navigate through previous and next? */}
        </>
    )
}
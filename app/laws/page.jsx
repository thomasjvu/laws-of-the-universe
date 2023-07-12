'use client'

import Menu from '@/components/Menu'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const Lotus = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Lotus), { ssr: false })
// const Lemuria = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Lemuria), { ssr: false })
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

    const router = useRouter()

    // animate text
    const [textIndex, setTextIndex] = useState(0)
    const [animatedText, setAnimatedText] = useState('')

    // spiritual law data
    let [currentLaw, setCurrentLaw] = useState(0)

    const [isName, setIsName] = useState('')
    const [isShortName, setIsShortName] = useState('')
    const [isDescription, setIsDescription] = useState('')

    /* GET DATA FROM API */
    // change index, text, quote, etc on getData.
    const getData = async () => {
        const query = await fetch('/api/laws')
        const response = await query.json()

        // console.log('Current Text Index:', textIndex)
        // console.log('Response from API', response)
        // console.log('Response Index Data', response[currentLaw])

        setCurrentLaw(response[currentLaw].id)
        setIsName(response[currentLaw].name)
        setIsShortName(response[currentLaw].short_name)
        setIsDescription(response[currentLaw].description)


        // console.log('isText:', isText)
        // console.log('currentLaw:', currentLaw)
        // console.log('shortName:', isShortName)
        // console.log('name:', isName)

        setAnimatedText('') // Reset animatedText when updating isText
        setTextIndex(0) // Reset textIndex
    }

    // Refetch Data on currentLaw Update
    useEffect(() => {
        getData()
    }, [currentLaw])

    // Animate Law Description
    useEffect(() => {

        if (textIndex < isDescription.length) {
            const typingTimeout = setTimeout(() => {
                setAnimatedText((prevText) => prevText + isDescription[textIndex])
                setTextIndex((prevIndex) => prevIndex + 1)
            }, 10)

            return () => {
                if (typingTimeout) {
                    // Clear the typing timeout when the component is unmounted
                    clearTimeout(typingTimeout)
                }
            }
        }
    }, [isDescription, textIndex])

    return (
        <>
            <Menu />
            <div className='mx-auto flex max-h-screen w-full flex-col flex-wrap items-center md:flex-row lg:w-4/5'>
                <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
                    <p className='w-full font-mono uppercase z-10'>Law of the Universe #{currentLaw}</p>
                    <h1 className='my-4 font-display text-5xl font-bold leading-tight z-10'>{isShortName.toUpperCase()}</h1>
                    <p className='mb-8 font-serif text-2xl italic leading-normal z-10'>{isName}</p>
                </div>
            </div>
            <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
                <p className='animated-text mb-8 font-serif text-3xl leading-normal z-10'>{animatedText}</p>
            </div>
            {/* prev && next buttons should refetch the api and increment/decrement the index accordingly */}
            <div className='mx-auto flex h-1/2 w-full flex-col flex-wrap items-end justify-between font-mono md:flex-row lg:w-4/5'>
                {(currentLaw > 0) ? (
                    <button className="z-10" onClick={() => setCurrentLaw(--currentLaw)}>⟵ Previous</button>
                ) : (
                    <p></p>
                ) 
                }
                {(currentLaw < 27) &&
                    <button className="z-10" onClick={() => setCurrentLaw(++currentLaw)}>Next ⟶</button>
                }
            </div>

            <View className='absolute top-0 flex h-[90%] w-full flex-col items-center justify-center'>
                {/* <Lemuria */}
                {/*     scale={0.25} */}
                {/*     position={[0, -1.5, 0]} */}
                {/*     rotation={[0.0, 0, 0]} */}
                {/*     route='/' */}
                {/*     className='cursor-pointer' */}
                {/* /> */}
                <Lotus
                    scale={0.35}
                    position={[0, -1.9, 0]}
                    rotation={[0.0, 0, 0]}
                    className='cursor-pointer z-10'
                    onClick={() => router.push('/')}
                />
                <Common color='' />
            </View>
        </>
    )
}

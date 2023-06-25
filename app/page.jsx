'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import Menu from '@/components/Menu'
import SocialIcons from '@/components/SocialIcons'

const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })
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
    return (
        <>
            <Menu />
            <main className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row lg:w-4/5'>
                {/* jumbo */}
                <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left bg-stone-900 text-white rounded-2xl'>
                    <p className='w-full uppercase font-serif italic'>Laws of the Universe —</p>
                    <h1 className='my-4 text-7xl font-bold leading-tight font-display tracking-widest'>LOTUS</h1>
                    <p className='mb-8 text-3xl leading-normal font-serif'>Learn about the Laws of the Universe</p>
                    {/* social icons */}
                    <div className="flex justify-end w-full">
                        <SocialIcons />
                    </div>
                </div>

                <div className='w-full text-center md:w-3/5'>
                    <View orbit className='flex h-screen w-full flex-col items-center justify-center'>
                        <Suspense fallback={null}>
                            <Lemuria scale={0.75} position={[0, 0, 0]} />
                            <Common />
                        </Suspense>
                    </View>
                </div>
            </main>
        </>
    )
}

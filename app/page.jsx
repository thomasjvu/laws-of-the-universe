'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { useRouter } from 'next/navigation'

import Menu from '@/components/Menu'
import SocialIcons from '@/components/SocialIcons'
import Link from 'next/link'
import { SolarMapArrowRightBold } from '@/components/Icons'

// const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })
// const Lemuria = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Lemuria), { ssr: false })
const Lotus = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Lotus), { ssr: false })
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

    return (
        <>
            <Menu />
            <main className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row lg:w-4/5 justify-center'>
                {/* jumbo */}
                <div className='flex w-full flex-col items-start justify-center rounded-2xl bg-stone-900 p-12 text-center text-white md:w-2/5 md:text-left'>
                    <p className='w-full font-serif uppercase italic'>Laws of the Universe —</p>
                    <h1 className='my-4 font-display text-7xl font-bold leading-tight tracking-widest'>L.O.T.U.S</h1>
                    <Link href='/laws' className='mb-8 font-serif text-3xl leading-normal hover:text-stone-700 flex items-center gap-5'>
                        Learn About Universal Spiritual Laws
                        <SolarMapArrowRightBold />
                    </Link>
                    {/* social icons */}
                    <div className='flex w-full justify-end'>
                        <SocialIcons />
                    </div>
                </div>
                <div className='w-full text-center md:w-3/5'>
                    <View className='flex h-screen w-full flex-col items-center justify-center'>
                        <Suspense fallback={null}>
                            <Lotus scale={0.85} position={[0, -0.25, 0]} rotation={[0.2, 0, 0]} onClick={() => router.push('/laws')} className="cursor-pointer"/>
                            <Common />
                        </Suspense>
                    </View>
                </div>
            </main>
        </>
    )
}

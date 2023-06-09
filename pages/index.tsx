import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Masthead from '../components/masthead'
import AboutUs from '../components/aboutus'
import Skills from '../components/skills'
import Works from '@/components/works'
import TrustedBy from '@/components/trustedby'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Off The Shelf</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead/>
      <AboutUs/>
      <Skills/>
      <Works/>
      <TrustedBy/>
    </div>
  )
}

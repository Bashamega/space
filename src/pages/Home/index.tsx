import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
   <main className='relitve '>
    <div className='absolute top-0 left-0 w-[100vw] h-[100vh] -z-20'>
      <Image alt='bg' src='/home/background-home-desktop.jpg' layout='fill' objectFit='cover' draggable={false}/>
    </div>
    <main className='flex items-center justify-center content-center w-[100%] h-[calc(100%-200px)]'>
      <section className="flex w-3/4">
        <div className='w-1/2 h-[500px] flex items-center'>
          <div>
            <h2 className=' text-2xl font-thin'>SO, YOU WANT TO TRAVEL TO</h2>
            <h1 className=' text-9xl font-thin '>SPACE</h1>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          
        </div>
        <div className='w-1/2'><button className='bg-white h-[500px] w-[500px] text-black rounded-full'>Explore</button></div>
      </section>
    </main>
    
   </main>
  )
}

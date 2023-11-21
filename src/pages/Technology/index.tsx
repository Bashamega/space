import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, {useState} from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Technology() {
  const [step, setStep] = useState(1)
  return (
   <main className='relitve w-[100vw] mt-5'>
    <div className='absolute top-0 left-0 w-[100vw] h-[100vh] -z-20'>
      <Image alt='bg' src='/technology\background-technology-desktop.jpg' layout='fill' objectFit='cover' draggable={false}/>
    </div>
    <main className='flex items-center justify-center w-[100%] h-[calc(100%-200px)]'>
      {step === 1?(
        <section className='flex items-center justify-center relative'>
          <nav className=' absolute top-[-10%] left-[25%] text-2xl font-thin'>
            <span className='font-extrabold mr-1 text-gray-500'>03</span>
            SPACE LAUNCH 101
          </nav>
          <section className='mt-10 grid gap-5 grid-cols-3 w-1/2'>
            <aside className=' space-y-8'>
              <div className="cursor-pointer rounded-full bg-white w-20 h-20 text-black flex justify-center items-center text-xl" onClick={()=>{setStep(1)}}>1</div>
              <div className="cursor-pointer rounded-full border w-20 h-20  flex justify-center items-center text-xl" onClick={()=>{setStep(2)}}>2</div>
              <div className="cursor-pointer rounded-full border w-20 h-20  flex justify-center items-center text-xl" onClick={()=>{setStep(3)}}>3</div>
            </aside>
            <section >
              <span className=' font-thin'>THE TERMINOLOGY…</span>
              <h1 className='text-5xl'>LAUNCH VEHICLE</h1>
              <p className='mt-5 text-[#D0D6F9] font-thin'>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
              </p>
            </section>
            <Image src={"/technology/image-launch-vehicle-portrait.jpg"} alt='img' width={10000} height={0}></Image>
          </section>
        </section>
      ):step === 2?(
    <section className='flex items-center justify-center relative'>
      <nav className=' absolute top-[-10%] left-[25%] text-2xl font-thin'>
        <span className='font-extrabold mr-1 text-gray-500'>03</span>
        SPACE LAUNCH 101
      </nav>
      <section className='mt-10 grid gap-5 grid-cols-3 w-1/2'>
        <aside className=' space-y-8'>
          <div className="rounded-full border w-20 h-20 cursor-pointer  flex justify-center items-center text-xl" onClick={()=>{setStep(1)}}>1</div>
          <div className="rounded-full bg-white w-20 h-20 cursor-pointer text-black flex justify-center items-center text-xl" onClick={()=>{setStep(2)}}>2</div>
          <div className="rounded-full border w-20 h-20 cursor-pointer  flex justify-center items-center text-xl" onClick={()=>{setStep(3)}}>3</div>
        </aside>
        <section className='mr-5'>
          <span className=' font-thin'>THE TERMINOLOGY…</span>
          <h1 className='text-5xl'>SPACEPORT</h1>
          <p className='mt-5 text-[#D0D6F9] font-thin'>
          A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
          </p>
        </section>
        <Image src={"/technology/image-spaceport-portrait.jpg"} alt='img' width={10000} height={0}></Image>
      </section>
    </section>
    ):(
      <section className='flex items-center justify-center relative'>
        <nav className=' absolute top-[-10%] left-[25%] text-2xl font-thin'>
          <span className='font-extrabold mr-1 text-gray-500'>03</span>
          SPACE LAUNCH 101
        </nav>
        <section className='mt-10 grid gap-5 grid-cols-3 w-1/2'>
        <aside className=' space-y-8'>
          <div className="rounded-full border w-20 h-20 cursor-pointer  flex justify-center items-center text-xl" onClick={()=>{setStep(1)}}>1</div>
          <div className="rounded-full border w-20 h-20 cursor-pointer  flex justify-center items-center text-xl" onClick={()=>{setStep(2)}}>2</div>
          <div className="rounded-full bg-white w-20 h-20 cursor-pointer text-black flex justify-center items-center text-xl" onClick={()=>{setStep(3)}}>3</div>
        </aside>
        <section >
          <span className=' font-thin'>THE TERMINOLOGY…</span>
          <h1 className='text-5xl'>SPACE CAPSULE</h1>
          <p className='mt-5 text-[#D0D6F9] font-thin'>
          A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
          </p>
        </section>
        <Image src={"/technology/image-space-capsule-portrait.jpg"} alt='img' width={10000} height={0}></Image>
      </section>
      </section>
    )}

    </main>
    
   </main>
  )
}

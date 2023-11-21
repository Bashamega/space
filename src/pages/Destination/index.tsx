import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, {useState} from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Destination() {
  const [destenation, setdestination] = useState({
    full_name: 'MOON',
    about: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    img: 'image-moon.png',
    distance: '384,400 KM',
    time: '3 DAYS'
  })
  const change = (active : String)=>{
    switch (active) {
      case "mars":
        setdestination({
          full_name: 'MARS',
          about: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
          img: 'image-mars.png',
          distance: '225 MIL. KM',
          time: '9 MONTHS'
        })
        break;
      case "europa":
        setdestination({
          full_name: 'EUROPA',
          about: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
          img: 'image-europa.png',
          distance: '628 MIL. KM',
          time: '3 YEARS'
        })
        break;
      case "titan":
        setdestination({
          full_name: 'TITAN',
          about: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
          img: 'image-titan.png',
          distance: '1.6 BIL. km',
          time: '7 YEARS'
        })
        break;
      
      default:
        setdestination({
          full_name: 'MOON',
          about: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
          img: 'image-moon.png',
          distance: '384,400 KM',
          time: '3 DAYS'
        })
        break;
    }
  }
  return (
   <main className='relitve w-[100vw] mt-5'>
    <div className='absolute top-0 left-0 w-[100vw] h-[100vh] -z-20'>
      <Image alt='bg' src='/destination\background-destination-desktop.jpg' layout='fill' objectFit='cover' draggable={false}/>
    </div>
    <main className='flex items-center justify-center w-[100%] h-[calc(100%-200px)]'>
      <section className=' relative w-1/2'>
      <nav className=' absolute top-[-20%] left-0 text-2xl font-thin'>
        <span className='font-extrabold mr-1 text-gray-500'>01</span>
        Pick your destination
      </nav>
      <section className="flex w-[100%] items-center">
        <aside className=' mr-36'>
            <Image src={`/destination/${destenation.img}`} width={500} height={0} alt={`${destenation.full_name} Img`} draggable={false}></Image>
        </aside>
        <main className=' mt-10 w-3/4 '>
            <nav className='flex w-[100%] space-x-3'>
            <div onClick={()=>{change('moon')}} className={` cursor-pointer relative font-thin ${destenation.full_name !== 'MOON' ? 'text-slate-500' : ''}`}>
              MOON
              {destenation.full_name === 'MOON' ? (
                <div onClick={()=>{change('moon')}} className="h-0 border w-11 absolute bottom-0" />
              ) : (
                <></>
              )}
            </div>
            <div onClick={()=>{change('mars')}} className={`cursor-pointer relative font-thin ${destenation.full_name !== 'MARS' ? 'text-slate-500' : ''}`}>
              MARS
              {destenation.full_name === 'MARS' ? (
                <div className="h-0 border w-11 absolute bottom-0" />
              ) : (
                <></>
              )}
            </div>
            <div onClick={()=>{change('europa')}} className={`cursor-pointer relative font-thin ${destenation.full_name !== 'EUROPA' ? 'text-slate-500' : ''}`}>
              EUROPA
              {destenation.full_name === 'EUROPA' ? (
                <div className="h-0 border w-16 absolute bottom-0" />
              ) : (
                <></>
              )}
            </div>
            <div onClick={()=>{change('titan')}} className={`cursor-pointer relative font-thin ${destenation.full_name !== 'TITAN' ? 'text-slate-500' : ''}`}>
              TITAN
              {destenation.full_name === 'TITAN' ? (
                <div className="h-0 border w-11 absolute bottom-0" />
              ) : (
                <></>
              )}
            </div>            
            </nav>
            <h1 className=' text-5xl'>{destenation.full_name}</h1>
            <p className="font-thin mt-5">{destenation.about}</p>
            <hr className='my-5 border-slate-600'></hr>
            <div className="flex text-sm space-x-10">
                <div>
                    <span className=' font-thin'>AVG. DISTANCE</span>
                    <p>{destenation.distance}</p>
                </div>
                <div>
                <span className=' font-thin'>Est. travel time</span>
                    <p>{destenation.time}</p>
                </div>
            </div>
        </main>
      </section>
      
      
      </section>
    
    </main>

    
   </main>
  )
}

import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, {useState} from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Crew() {
  const [crew, setcrew] = useState({
    job: 'COMMANDER',
    full_name: 'Douglas Hurley',
    about: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    img: 'image-douglas-hurley.png'
  })
  const [active, setactive] = useState(1)
  const change = ()=>{
    switch (active) {
        case 1:
            setcrew({
                job: 'Mission Specialist ',
                full_name: 'MARK SHUTTLEWORTH',
                about: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
                img: 'image-mark-shuttleworth.png'
            })
            setactive(2)
            break;
        case 2:
            setcrew({
                job: 'PILOT',
                full_name: 'Victor Glover',
                about: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
                img: 'image-victor-glover.png'
            })
            setactive(3)
            break;
        case 3:
            setcrew({
                job: 'Flight Engineer',
                full_name: 'Anousheh Ansari',
                about: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
                img: 'image-anousheh-ansari.png'
            })
            setactive(4)
            break;
            
        default:
            setcrew({
                job: 'COMMANDER',
                full_name: 'Douglas Hurley',
                about: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
                img: 'image-douglas-hurley.png'
              })
            setactive(1)
            break;
    }
  }
  const timer = setTimeout(() => {
    change()
  }, 10000);
  return (
   <main className='relitve w-[100vw] mt-5'>
    <div className='absolute top-0 left-0 w-[100vw] h-[100vh] -z-20'>
      <Image alt='bg' src='/crew\background-crew-desktop.jpg' layout='fill' objectFit='cover' draggable={false}/>
    </div>
    <main className='flex items-center justify-center w-[80%] h-[calc(100%-200px)]'>
      <section className=' relative w-1/2'>
      <nav className=' absolute top-[-20%] left-0 text-2xl font-thin'>
        <span className='font-extrabold mr-1 text-gray-500'>02</span>
        SPACE LAUNCH 101
      </nav>
      <main className=' mt-10 w-3/4'>
        <h2 className=' font-thin'>{crew.job}</h2>
        <h1 className=' text-5xl'>{crew.full_name}</h1>
        <p className="font-thin mt-5">{crew.about}</p>
      </main>
      
      </section>
    
    </main>
    <div className='flex absolute top-[80%] left-[20%]  space-x-3'>
      {active === 1 ? (<div className="w-5 h-5 rounded-full bg-white"></div>) : (<div className="w-5 h-5 rounded-full bg-gray-500"></div>)}
      {active === 2 ? (<div className="w-5 h-5 rounded-full bg-white"></div>) : (<div className="w-5 h-5 rounded-full bg-gray-500"></div>)}
      {active === 3 ? (<div className="w-5 h-5 rounded-full bg-white"></div>) : (<div className="w-5 h-5 rounded-full bg-gray-500"></div>)}
      {active === 4 ? (<div className="w-5 h-5 rounded-full bg-white"></div>) : (<div className="w-5 h-5 rounded-full bg-gray-500"></div>)}
 
    </div>
    <aside className=' absolute bottom-0 left-[50%]'>
        <Image src={`/crew/${crew.img}`} width={450} height={0} alt={`${crew.full_name} Img`} draggable={false}></Image>
      </aside>
   </main>
  )
}

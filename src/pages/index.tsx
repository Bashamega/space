import React, { useState } from "react";
import Home from "./Home";
import Image from "next/image";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";

export default function Page(): JSX.Element {
  const [page, setPage] = useState<string>('Home');

  return (
    <main>
      <nav className="p-5 w-[100vw] flex items-center">
        <Image src="/shared/logo.svg" width={100} height={100} alt="logo" />
        <div className="border h-0 w-[65%] ml-2" />
        <div className="flex space-x-8 backdrop-blur-2xl h-[100px] items-center ml-[-2%] pl-[3%]  w-[calc(60%-52px)]">
          <div className={`cursor-pointer ${page === 'Home' ? 'font-extrabold' : ''}`} onClick={() => setPage('Home')}>
            <span className="mr-1">00</span>
            Home
            {page === 'Home' && <div className="h-0 border w-20 absolute bottom-0" />}
          </div>
          <div className={`cursor-pointer ${page === 'dest' ? 'font-extrabold' : ''}`} onClick={() => setPage('dest')}>
            <span className="mr-1">01</span>
            DESTINATION
            {page === 'dest' && <div className="h-0 border w-32 absolute bottom-0" />}
          </div>
          <div className={`cursor-pointer ${page === 'crew' ? 'font-extrabold' : ''}`} onClick={() => setPage('crew')}>
            <span className="mr-1">02</span>
            CREW
            {page === 'crew' && <div className="h-0 border w-20 absolute bottom-0" />}
          </div>
          <div className={`cursor-pointer ${page === 'tech' ? 'font-extrabold' : ''}`} onClick={() => setPage('tech')}>
            <span className="mr-1">03</span>
            TECHNOLOGY
            {page === 'tech' && <div className="h-0 border w-32 absolute bottom-0" />}
          </div>
        </div>
      </nav>
      {page === "Home" ? (
        <Home />
      ) : page ==="dest"?(
        <Destination/>
      ): page ==="crew"?(
      <Crew/>
      ):(
      <Technology/>
      )}
    </main>
  );
}

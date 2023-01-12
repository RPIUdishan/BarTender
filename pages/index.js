import { useState } from "react"
import Header from "../components/header"
import MainImages from "../components/mainImages"
import Search from "../components/search"
import Test from "../pages/api/test"

export default function Home() {

  return (
    <div className="bg-[url('/bar.jpg')] bg-cover w-full h-full scroll-smooth">
      <Header />
      <MainImages />
      <div className="mt-8 flex items-center justify-center">
        <a href="#search">
          <div className="border-solid border-white border-2 rounded-full animate-pulse cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white">
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
          </div>
        </a>
        {/* <p className="text-white font-mono mr-2 text-xl">Search Below</p> */}
      </div>
      <div id="search" className="mt-24">
        <Search />
      </div>
      {/* <button type="button" onClick={com}>asdfasdasfd</button> */}
    </div>
  )
}

import React, { useState, } from 'react'

const Navbar = ({setSearchKey}) => {

  const [sideMenu,setSideMenu]=useState(false)

//Functions to fetch news by category

  const fetchTrending=(e)=>{
    e.preventDefault()
    setSearchKey('trending')
  }
  const fetchSports=(e)=>{
    e.preventDefault()
    setSearchKey('sports')
  }
  const fetchTechnology=(e)=>{
    e.preventDefault()
    setSearchKey('technology')
  }
  const fetchPolitics=(e)=>{
    e.preventDefault()
    setSearchKey('politics')
  }
  const fetchBussiness=(e)=>{
    e.preventDefault()
    setSearchKey('bussiness')
  }
  const fetchGames=(e)=>{
    e.preventDefault()
    setSearchKey('games')
  }

 
  return (


    <div>
    <div className={`p-5 flex flex-col z-20 gap-y-20 h-screen bg-red-400 text-black w-48 mr-0 fixed top-0 right-0 ${!sideMenu?'translate-x-48':'-translate-x-42'} transition duration-300 sm:hidden`}>
     <div onClick={()=>setSideMenu(false)} className="w-full text-2xl ">

      <i className="cursor-pointer fa-solid fa-arrow-right"></i>
     </div>
     <ul className='flex flex-col gap-y-10'>

      <li className='transition hover:scale-110 cursor-pointer hover:text-gray-300' onClick={(e)=>fetchTrending(e)}>All news</li>
      <li className='transition hover:scale-110 cursor-pointer hover:text-gray-300' onClick={(e)=>fetchSports(e)}>Sports</li>
      <li className='transition hover:scale-110 cursor-pointer hover:text-gray-300' onClick={(e)=>fetchPolitics(e)}>Politics</li>
      <li className='transition hover:scale-110 cursor-pointer hover:text-gray-300' onClick={(e)=>fetchBussiness(e)}>Bussiness</li>
      <li className='transition hover:scale-110 cursor-pointer hover:text-gray-300' onClick={(e)=>fetchGames(e)}>Games</li>
      <li className='transition hover:scale-110 cursor-pointer hover:text-gray-300' onClick={(e)=>fetchTechnology(e)}>Technology</li>
    
     </ul>
      
      </div>


    <div className='h-20 w-screen flex justify-evenly items-center shadow-md sm:justify-between'>
        <div className='text-2xl pl-32 sm:ml-0 sm:mr-10'>
            <h3 className='font-mono text-red-300 whitespace-nowrap'>Nik News</h3>

        </div>

        <div className='hidden sm:flex justify-center items-center gap-x-10 text-2xl cursor-pointer whitespace-nowrap font-mono mr-28 '>
            <h3 className='transition duration-100 hover:scale-125 hover:text-gray-400 active:text-red-700' onClick={(e)=>fetchTrending(e)}>All News</h3>
            <h3 className='transition duration-100 hover:scale-125  hover:text-gray-400 active:text-red-700' onClick={(e)=>fetchSports(e)}>Sports</h3>
            <h3 className='transition duration-100 hover:scale-125  hover:text-gray-400 active:text-red-700' onClick={(e)=>fetchPolitics(e)}>Politics</h3>
            <h3 className='transition duration-100 hover:scale-125  hover:text-gray-400 active:text-red-700' onClick={(e)=>fetchBussiness(e)}>Bussiness</h3>
            <h3 className='transition duration-100 hover:scale-125  hover:text-gray-400 active:text-red-700' onClick={(e)=>fetchGames(e)}>Games</h3>
            <h3 className='transition duration-100 hover:scale-125  hover:text-gray-400 active:text-red-700' onClick={(e)=>fetchTechnology(e)}>Technology</h3>
        </div>
        <div className='w-20 sm:hidden' onClick={()=>setSideMenu(true)}>
        <i className="cursor-pointer ml-20 fa-solid fa-bars"></i>
        </div>
    </div>
    </div>
  )
}

export default Navbar
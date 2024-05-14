import React, { useEffect, useState } from 'react'

const homePage = () => {

  const[search, setSearch] = useState('')
  const[city, setCity] = useState([])
  const [isVisible, setIsVisible] = useState(true);
 
  const getWeather = async()=>{
    const apiKey = "b101f2a0a1d225ce16d94eb2493f592b";
     try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`)
      const resJson = await response.json()
      console.log(resJson.main)
      setCity(resJson.main)
     } catch (error) {
      console.error(error)
     }
  }
  useEffect(()=>{
     getWeather()
  },[])


  return (
    <div className=' w-2/3 mt-5'>
      <input type="text" className=' w-72 h-12 outline-1 border border-black rounded-md' value={search} onChange={(e)=> setSearch(e.target.value)}/>
      <button className='bg-blue-500 w-20 h-12 rounded-md ml-2' onClick={getWeather}>Search</button>
      <div className='mt-3'>
        <table>
          <thead>
          <tr className=' w-full flex justify-evenly bg-blue-500 text-white'>
            <th className=' mr-28 ml-3'>City</th>
            <th className='mr-28'>Description</th>
            <th className='mr-28'>Temprature</th>
            <th className='mr-28'>Pressure</th>
            <th className='mr-3'>Delete</th>
          </tr>
          </thead>
        </table>
            {
             !city ? (
                <p className='text-3xl font-semibold mt-5'>No Data Found</p>
              ) : (
                <div className='flex mt-5'>
               <p className=' ml-4 font-semibold text-xl'>{search}</p>
               <p className=' ml-6 font-semibold text-lg'>This is the weather about {search}</p>
               <p className=' ml-14 font-semibold text-xl'>{city.temp}°C</p>
               <p className='ml-28 font-semibold text-xl'>{city.pressure}</p>
               <p className=' ml-32 font-semibold text-xl'>🗑</p>
               </div>
              )
            }
        
      </div>
    </div>
  )
}

export default homePage

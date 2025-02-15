import React from 'react'

const LocationSearchPanel = ({setPanelOpen, setVehiclePanel}) => {

    const locations= [
        "240/1, Kali charan Ghosh Road, Kolkata",
        "240/1, Kali charan Ghosh Road, Kolkata",
        "240/1, Kali charan Ghosh Road, Kolkata",
        "240/1, Kali charan Ghosh Road, Kolkata",
    ]


  return (
    <div className='px-8'>
        {
            locations.map(function(elem, idx){
                return(
                    <div key={idx} onClick={()=>{
                        setVehiclePanel(true)
                        setPanelOpen(false)
                    }} className='bg-white flex items-center justify-between gap-4 mb-2 active:border-2 active:border-black rounded-xl p-2'>
                        <h2 className='bg-[#eeeeee] rounded-full h-7 w-7 flex items-center justify-center'><i className="ri-map-pin-fill "></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                )
            })
        }   
    </div>
  )
}

export default LocationSearchPanel
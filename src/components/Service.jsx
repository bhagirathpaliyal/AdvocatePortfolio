import React from 'react'

const Service = () => {

    const lawCategories = [
      "Criminal Laws",
      "Civil Laws",
      "Family Laws",
      "Matrimonial Laws",
      "Property & Real Estate Laws",
      "Consumer Protection Laws",
      "Election Disputes",
      "Service Matters",
      "White Collar Crimes",
      "Constitutional Matters",
      "Human Rights Matters",
      "Services for Overseas Indians/NRIs"
    ]
  return (
    <div id='Service' className='flex flex-col justify-center items-center p-[50px] bg-gray-100'>
        <h4 className='font-bold mb-[40px] max-sm:text-[16px] text-[24px]'>AREAS OF SERVICE</h4>
       
          <div className='w-[100%] flex justify-center gap-[5%] flex-wrap'>
            {lawCategories.map((element,index)=>(
              <p className=' w-[47.5%] text-center bg-gradient-to-r from-[#08132f] to-[#0c2b59] text-[#fff] max-sm:text-[10px] text-[14px] mb-[20px] p-[10px] border rounded-lg ' key={index}>{element}</p>
            ))}
          </div>



       

           
       
    </div>
  )
}

export default Service
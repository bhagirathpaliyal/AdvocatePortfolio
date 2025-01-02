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
    <div id='Service' className='flex flex-col justify-center items-center p-[50px]'>
        <h4 className='font-bold mb-[40px] max-sm:text-[16px] text-[24px]'>AREAS OF SERVICE</h4>
        {/* <div> */}
          <div className='w-[80%] flex justify-center gap-[10%] flex-wrap'>
            {lawCategories.map((element)=>(
              <p className='w-[45%] text-center max-sm:text-[10px] text-[14px] mb-[20px] p-[10px] border rounded-lg '>{element}</p>
            ))}
          </div>



       

           
        {/* </div> */}
    </div>
  )
}

export default Service
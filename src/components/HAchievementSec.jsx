import React from 'react'
import awardImg from '/public/assets/award-solid.svg'
import shieldImg from '/public/assets/shield-alt-solid.svg'
import trophyImg from '/public/assets/trophy-solid.svg'
import earthAsiaImg from '/public/assets/earth-asia-solid.svg'
const HAchievementSec = () => {
  const data=[
    {
      img: awardImg,
      title: "Proven",
      description: "Proven has helped to win millions for our clients",
    },
    {
      img: shieldImg,
      title: "Trusted",
      description: "We take our role as trusted legal advisors seriously",
    },
    {
      img: trophyImg,
      title: "Award Winning",
      description: "We are honored to have received multiple awards",
    },
    {
      img: earthAsiaImg,
      title: "Multilingual",
      description: "Meet all your language & localization needs",
    },
  ]
  return (
    <div className="bg-primary py-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <img src={item.img} alt={item.title} className="h-16 w-16 mb-4" />
          <h4 className="text-secondary text-xl font-bold">{item.title}</h4>
          <p className="text-white text-sm mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default HAchievementSec
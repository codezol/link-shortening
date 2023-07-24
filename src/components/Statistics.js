import React from 'react'
import Card from '../Card'
import detailed_records from "./images/icon-detailed-records.svg"
import brand_recoginition from "./images/icon-brand-recognition.svg"
import fully_cusomaziable  from "./images/icon-fully-customizable.svg"



function Statistics() {
  return (
    <div className='statistics flex-col flex justify-center'>
      <div className='title'>
            <h1>Advanced statistics</h1>
            <p className='text'>Track how your links are preforming across the web with 
                our advanced statistics dashboard
            </p>
      </div>
      <div className="cards">
                <div className='line'></div>
                <Card  icon={brand_recoginition} title={"Brand Recognition"} describtion={"Boost your brand recognition with each click. Generic links don't mean a thing. Brands links help instill confidence in your content."}/>
                <Card icon={detailed_records} title={'Detailed Records'} describtion={" Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."}/>
                <Card icon={fully_cusomaziable} title={'Fully Customizable'} describtion={" Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."}/>
            </div>
    </div>
  )
}

export default Statistics

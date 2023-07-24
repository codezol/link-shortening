import React, { useEffect, useState } from 'react'
import ShortenLink from './ShortenLink'

function Search() {
const [renderList, setRenderList] = useState([])
const handleShorten = async(e) => {
  e.preventDefault();
  const linkInput = document.querySelector("#linkInput");
  const apiURL = `https://api.shrtco.de/v2/shorten?url=${linkInput.value}`;
  try{
    const response = await fetch(apiURL)
    const data = await response.json();
    if(data.ok){
      //get the orignal link and the short link
      const {short_link, original_link} = data.result;
      //add the links to the renderList
      const rendered = [...renderList, [short_link, original_link]]
      setRenderList(rendered)
      linkInput.value = ""
    }else {
      linkInput.classList.add("empty");
      setTimeout(() => {
        linkInput.classList.remove("empty");
      }, 2000);
    }
  }catch(err){
    console.log(err)
  }

}
useEffect(() => {
  const fetchData = () => {
    console.log("renderList changed")
    console.log(renderList)
  }
  fetchData()
}, [renderList])
  
  return (
    <div className='search'>
        <form>
            <input  type="text" id='linkInput' placeholder='Shorten a link here...' />
            <button type='submit' className='btn btn-ouline' onClick={handleShorten}>Shorten It?</button>
        </form>
        
        <ul>
          {renderList.map((links, index) => {
            return <ShortenLink original_link={links[1]} short_link={links[0]} key={`link-number-${index}`} id={`link-number-${index}`}/>
          })}
        </ul>
    </div>
  )
}

export default Search

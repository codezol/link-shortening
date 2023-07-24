import React from 'react'
import Search from './Search'
import { useSelector } from 'react-redux'
import Statistics from './Statistics'

function Main() {
  const counter = useSelector(state => state.counter.value)
  console.log(counter)
  return (
    <main className='main'>
      <Search />
      <Statistics />
      
    </main>
  )
}

export default Main

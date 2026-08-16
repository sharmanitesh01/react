import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='Parent'>
      <Card user="Aman"/>
      <Card user="Nitesh"/>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default App
import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/*  We Can Write Function like this which is import from another file */}
      {Card()} 

      {/* Also we can function like html tags which is self closed  */}
      <Card /> 

    </div>
  )
}

export default App